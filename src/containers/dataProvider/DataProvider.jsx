import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { COMPANIES_URL, INCOMES_URL } from "Common/Urls";


const DataProvider = ({ children }) => {
    const [companies, setCompanies] = useState(null);
    // const [incomes, setIncomes] = useState(null);

    const fetchCompanies = async () => {
        const fetchedCompanies = await axios.get(COMPANIES_URL);
        console.log("companies", fetchedCompanies);
        setCompanies(fetchedCompanies.data);
    };

    const fetchIncome = async id => {
        const { data: { incomes } } = await axios.get(`${INCOMES_URL}/${id}`);
        console.log("incomes");
        return incomes;
    };

    const getTotalIncome = async companyId => {
        const income = await fetchIncome(companyId);
        console.log(income);
    };

    const get = (limit, offset) => {

    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    if (!_.isNull(companies)) {
        return (
            children(companies)
        );
    }

    return <div>loading...</div>;
};

DataProvider.propTypes = {
    children: PropTypes.instanceOf(Function).isRequired
};

export default DataProvider;
