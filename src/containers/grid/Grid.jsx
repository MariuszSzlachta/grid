import React from "react";
import PropTypes from "prop-types";
import GridBody from "Components/body/Body";
import GridHeader from "Components/header/Header";

import withSort from "App/HOC/withSort/withSort";

import "./grid.scss";

const Grid = ({
    data,
    gridColumns,
    currentSortParameters,
    onColumnSelect
}) => (
    <table className="grid">
        <GridHeader
            columns={gridColumns}
            currentSortParameters={currentSortParameters}
            onColumnSelect={onColumnSelect}
        />

        <GridBody data={data} />
    </table>
);

Grid.propTypes = {
    currentSortParameters: PropTypes.instanceOf(Object).isRequired,
    data: PropTypes.instanceOf(Array).isRequired,
    gridColumns: PropTypes.instanceOf(Array).isRequired,
    onColumnSelect: PropTypes.instanceOf(Function).isRequired
};

export default withSort(Grid);
