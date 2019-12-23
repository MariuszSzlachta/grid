import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SORT_ORDERS } from "Common/Enums";
import { isNextItemExists } from "Common/arrayUtils";
import GridHeader from "Components/gridHeader/GridHeader";
import { columnProvider } from "Common/columnProvider";
import _ from "lodash";

import "./grid.scss";

const Grid = ({ data }) => {
    const [sortedData, setSortedData] = useState(null);
    const [currentSortParameters, setCurrentSortParameters] = useState({
        column: _.first(columnProvider(data)).columnName,
        order: _.first(Object.values(SORT_ORDERS))
    });

    const isSameColumnClicked = columnClicked => columnClicked === currentSortParameters.column;

    const handleSort = sortParameters => {
        // posortuj tylko SRP
        console.log("sortParameters", sortParameters);
    };

    const getSortParameters = (columnName, currentSortOrder) => {
        const sortOrdersList = Object.values(SORT_ORDERS);
        const indexOfCurrentSortOrder = sortOrdersList.indexOf(currentSortOrder);

        if (isSameColumnClicked(columnName) && isNextItemExists(sortOrdersList, indexOfCurrentSortOrder)) {
            return ({
                column: columnName,
                order: sortOrdersList[indexOfCurrentSortOrder + 1]
            });
        }

        return ({
            column: columnName,
            order: _.first(sortOrdersList)
        });
    };

    const onColumnSelect = (selectedColumn, currentSortOrder) => {
        const sortParameters = getSortParameters(selectedColumn, currentSortOrder);

        setCurrentSortParameters(sortParameters);
        handleSort(sortParameters);
    };


    useEffect(() => {
        setSortedData(columnProvider(data));
    }, [data]);

    return (
        <table className="grid">
            {sortedData && (
                <GridHeader columns={sortedData} onColumnSelect={onColumnSelect} />
            )}
        </table>
    );
};

Grid.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired
};

export default Grid;
