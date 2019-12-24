import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SORT_ORDERS } from "Common/Enums";
import { isNextItemExists } from "Common/arrayUtils";
import { SortStrategy } from "Common/SortStrategy";
import GridHeader from "Components/gridHeader/GridHeader";
import { columnProvider } from "Common/columnProvider";
import _ from "lodash";

import "./grid.scss";

const Grid = ({ data }) => {
    const [gridColumns, setGridColumns] = useState(null);
    const [sortedData, setSortedData] = useState(null);
    const [currentSortParameters, setCurrentSortParameters] = useState({
        column: _.first(columnProvider(data)).columnName,
        order: _.first(Object.values(SORT_ORDERS))
    });

    const handleSort = sortParameters => {
        const dataToSort = [...data];
        const sorted = new SortStrategy(dataToSort, sortParameters).sort();
        console.log("sorted", sorted);
        // posortuj tylko SRP
        setSortedData(sorted);
        setGridColumns(columnProvider(sorted));
    };

    const getSortParameters = columnName => {
        const sortOrdersList = Object.values(SORT_ORDERS);
        const indexOfCurrentSortOrder = sortOrdersList.indexOf(currentSortParameters.order);

        if (isNextItemExists(sortOrdersList, indexOfCurrentSortOrder)) {
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
        setGridColumns(columnProvider(data));
    }, [data]);

    return (
        <table className="grid">
            {gridColumns && (
                <GridHeader columns={gridColumns} onColumnSelect={onColumnSelect} />
            )}
        </table>
    );
};

Grid.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired
};

export default Grid;
