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
    console.log("initialState", data);
    const [gridColumns, setGridColumns] = useState(null);
    const [sortedData, setSortedData] = useState(null);
    const [currentSortParameters, setCurrentSortParameters] = useState({
        column: _.first(columnProvider(data)).columnName,
        order: _.first(Object.values(SORT_ORDERS))
    });

    const isSameColumnClicked = columnClicked => columnClicked === currentSortParameters.column;

    const handleSort = sortParameters => {
        const sorted = new SortStrategy(data, sortParameters).sort();

        // posortuj tylko SRP
        console.log("sorted", sorted);
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
        console.log("sortParameters", sortParameters);

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
