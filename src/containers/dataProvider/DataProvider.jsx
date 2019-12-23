import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { COMPANIES_URL, INCOMES_URL } from "Common/Urls";


const DataProvider = ({ children }) => {
    const [companies, setCompanies] = useState(null);
    const [incomes, setIncomes] = useState(null);

    const fetchCompanies = async () => {
        const fetchedCompanies = await axios.get(COMPANIES_URL);
        setCompanies(fetchedCompanies);
    };

    const fetchIncomes = async id => {
        const fetchedIncomes = await axios.get(`${INCOMES_URL}/${id}`);
        setIncomes(fetchedIncomes);
    };

    useEffect(() => {
        fetchIncomes();
        fetchCompanies();
    }, []);

    return (
        <>
            {React.cloneElement(children, {
                companies, incomes, fetchCompanies, fetchIncomes
            })}
        </>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default DataProvider;
