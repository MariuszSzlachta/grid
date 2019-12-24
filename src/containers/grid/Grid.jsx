import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { SORT_ORDERS } from "Common/Enums";
import { isNextItemExists } from "Common/arrayUtils";
import { SortStrategy } from "Common/SortStrategy";
import GridBody from "Components/body/Body";
import GridHeader from "Components/header/Header";
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

    const handleSort = useCallback(sortParameters => {
        const dataToSort = [...data];
        const sorted = new SortStrategy(dataToSort, sortParameters).sort();

        setSortedData(sorted);
        setGridColumns(columnProvider(sorted));
    }, [data]);

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
        handleSort(currentSortParameters);
    }, [currentSortParameters, data, handleSort]);

    return (
        <table className="grid">
            {gridColumns && (
                <GridHeader columns={gridColumns} currentSortParameters={currentSortParameters} onColumnSelect={onColumnSelect} />
            )}

            {gridColumns && (
                <GridBody data={sortedData} />
            )}
        </table>
    );
};

Grid.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired
};

export default Grid;
