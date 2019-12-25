import PropTypes from "prop-types";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import _ from "lodash";
import { ALL_RECORDS_MARK } from "Common/Enums";
import { COMPANIES_URL, INCOMES_URL } from "Common/Urls";


const DataProvider = ({ children }) => {
    const [companies, setCompanies] = useState(null);
    const [fetchedIncomesForDisplayedData, setFetchedIncomesForDisplayedData] = useState(null);
    // paginacja
    const [pages, setPages] = useState([]);
    const [dataToShow, setDataToShow] = useState(null);
    const [offset, setOffset] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(null);
    //

    const createPages = useCallback(data => {
        if (itemsPerPage === ALL_RECORDS_MARK) {
            const slicedData = _.chunk(data, data && data.length);
            return setPages(slicedData);
        }

        const slicedData = _.chunk(data, itemsPerPage);
        return setPages(slicedData);
    }, [itemsPerPage]);

    const fetchCompanies = async () => {
        const fetchedCompanies = await axios.get(COMPANIES_URL);
        setCompanies(fetchedCompanies.data);
    };

    const fetchIncome = async id => {
        // eslint-disable-next-line no-shadow
        const { data } = await axios.get(`${INCOMES_URL}/${id}`);
        return data;
    };

    const getIncomesForDisplayedData = useCallback(async companiesList => {
        const fetchedIncomes = await Promise.all(companiesList.map(({ id }) => fetchIncome(id))).then(values => values);
        setFetchedIncomesForDisplayedData(fetchedIncomes);
    }, []);

    const setPreviousPage = () => {
        if (currentPage < pageCount) {
            const incrementedPage = currentPage + 1;
            setCurrentPage(incrementedPage);
        }
    };

    const setNextPage = () => {
        if (currentPage !== 0) {
            const decrementedPage = currentPage - 1;
            setCurrentPage(decrementedPage);
        }
    };

    const setFirstPage = () => {
        setCurrentPage(0);
    };

    const setLastPage = () => {
        setCurrentPage(pageCount);
    };


    useEffect(() => {
        fetchCompanies();
    }, []);

    useEffect(() => {
        getIncomesForDisplayedData(dataToShow);
    }, [dataToShow, getIncomesForDisplayedData]);

    useEffect(() => {
        createPages(companies);
    }, [companies, createPages, itemsPerPage]);

    useEffect(() => {
        setPageCount(pages.length);
        setDataToShow(pages[currentPage]);
    }, [currentPage, pages]);

    if (dataToShow) {
        return (
            children(dataToShow)
        );
    }

    return <div>loading...</div>;
};

DataProvider.propTypes = {
    children: PropTypes.instanceOf(Function).isRequired
};

export default DataProvider;
