import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { isNextItemExists, areParametersPresent } from "Common/arrayUtils";
import { columnProvider } from "Common/columnProvider";
import { SORT_ORDERS } from "Common/Enums";
import { SortStrategy } from "Common/SortStrategy";

const withSort = WrappedComponent => ({ data }) => {
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


    if (areParametersPresent([data, gridColumns, sortedData])) {
        return (
            <WrappedComponent
                gridColumns={gridColumns}
                currentSortParameters={currentSortParameters}
                onColumnSelect={onColumnSelect}
                data={sortedData}
            />
        );
    }

    return <div>loading...</div>;
};

export default withSort;
