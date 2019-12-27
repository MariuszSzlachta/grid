import { MONTH_BEGINNING_FORMAT } from "Common/Enums";
import PropTypes from "prop-types";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { COMPANIES_URL, INCOMES_URL } from "Common/Urls";
import moment from "moment";

import Loader from "Components/loader/Loader";


const DataProvider = ({
    children
}) => {
    const [fetchedCompanies, setFetchedCompanies] = useState(null);
    const [fetchedIncomesForCompanies, setFetchedIncomesForCompanies] = useState(null);
    const [data, setData] = useState(null);

    const fetchCompanies = async () => {
        const companies = await axios.get(COMPANIES_URL);
        setFetchedCompanies(companies.data);
    };

    const fetchIncome = async id => {
        // eslint-disable-next-line no-shadow
        const { data } = await axios.get(`${INCOMES_URL}/${id}`);
        return data;
    };

    const fetchIncomesForCompanies = useCallback(async () => {
        const fetchedIncomes = await Promise.all(fetchedCompanies.map(({ id }) => fetchIncome(id))).then(values => values);
        setFetchedIncomesForCompanies(fetchedIncomes);
    }, [fetchedCompanies]);


    const getIncomesForCurrentCompany = useCallback(companyId => {
        const { incomes: incomesForCurrentCompany } = fetchedIncomesForCompanies.find(income => income.id === companyId);
        return incomesForCurrentCompany;
    }, [fetchedIncomesForCompanies]);

    const getIncomesListSize = useCallback(companyId => (
        getIncomesForCurrentCompany(companyId).length
    ), [getIncomesForCurrentCompany]);

    const calculateTotalIncome = useCallback(companyId => {
        const incomesForCurrentCompany = getIncomesForCurrentCompany(companyId);
        const totalIncomeForCurrentCompany = incomesForCurrentCompany
            .map(el => el.value)
            .reduce((prev, current) => parseFloat(prev) + parseFloat(current), 0);

        return totalIncomeForCurrentCompany.toFixed(2);
    }, [getIncomesForCurrentCompany]);

    const calculateAverageIncome = useCallback(companyId => (
        calculateTotalIncome(companyId) / getIncomesListSize(companyId)
    ).toFixed(2), [calculateTotalIncome, getIncomesListSize]);

    const calculateLastMonthIncome = useCallback(companyId => {
        const monthBeginning = moment().format(MONTH_BEGINNING_FORMAT);

        const lastMonthIncome = getIncomesForCurrentCompany(companyId)
            .filter(income => moment(income.date).isSameOrAfter(monthBeginning))
            .map(el => el.value)
            .reduce((prev, current) => parseFloat(prev) + parseFloat(current), 0);

        return lastMonthIncome.toFixed(2);
    }, [getIncomesForCurrentCompany]);

    const mergeData = useCallback(() => {
        const mergedData = fetchedCompanies.map(company => ({
            ...company,
            totalIncome: calculateTotalIncome(company.id),
            lastMonthIncome: calculateLastMonthIncome(company.id),
            averageIncome: calculateAverageIncome(company.id)
        }));

        setData(mergedData);
    }, [calculateAverageIncome, calculateLastMonthIncome, calculateTotalIncome, fetchedCompanies]);

    useEffect(() => {
        if (fetchedIncomesForCompanies) {
            mergeData();
        }
    }, [fetchedIncomesForCompanies, mergeData]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    useEffect(() => {
        if (fetchedCompanies) {
            fetchIncomesForCompanies();
        }
    }, [fetchIncomesForCompanies, fetchedCompanies]);

    if (data) {
        return (
            children(
                data
            )
        );
    }

    return <Loader />;
};

DataProvider.propTypes = {
    children: PropTypes.instanceOf(Function).isRequired
};

export default DataProvider;
