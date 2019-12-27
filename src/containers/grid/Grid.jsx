import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import GridBody from "Containers/gridBody/GridBody";
import GridHeader from "Components/header/Header";
import Input from "Components/input/Input";

import withSort from "App/HOC/withSort/withSort";

import "./grid.scss";

const Grid = ({
    data,
    gridColumns,
    currentSortParameters,
    onColumnSelect
}) => {
    const [filteredData, setFilteredData] = useState(null);
    const [isDataFiltered, toggleIsDataFiltered] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleFilter = value => {
        setSearchValue(value);
        toggleIsDataFiltered(!_.isEmpty(value));
        const filtered = data.filter(row => Object.values(row).some(cell => String(cell).includes(value)));
        setFilteredData(filtered);
    };

    const onDataChanged = useCallback(() => {
        setFilteredData(null);
        toggleIsDataFiltered(false);
        setSearchValue("");
    }, []);

    useEffect(() => {
        onDataChanged();
    }, [data, onDataChanged]);

    return (
        <div className="grid-wrapper">
            <Input onValueChange={handleFilter} value={searchValue} />
            <table className="grid">
                <GridHeader
                    columns={gridColumns}
                    currentSortParameters={currentSortParameters}
                    onColumnSelect={onColumnSelect}
                />

                <GridBody data={isDataFiltered ? filteredData : data} />
            </table>
        </div>
    );
};

Grid.propTypes = {
    currentSortParameters: PropTypes.instanceOf(Object).isRequired,
    data: PropTypes.instanceOf(Array).isRequired,
    gridColumns: PropTypes.instanceOf(Array).isRequired,
    onColumnSelect: PropTypes.instanceOf(Function).isRequired
};

export default withSort(Grid);
