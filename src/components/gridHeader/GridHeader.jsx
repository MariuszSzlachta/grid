import PropTypes from "prop-types";
import React from "react";
import GridHeaderCell from "Components/gridHeaderCell/GridHeaderCell";

import "./gridHeader.scss";

const GridHeader = ({ columns, onColumnSelect }) => (
    <thead className="grid-header">
        <tr className="grid-header__row">
            {columns.map(column => (
                <GridHeaderCell
                    key={column.columnName}
                    onClick={onColumnSelect}
                    sortedBy={column.sortedBy}
                    content={column.columnName}
                />
            ))}
        </tr>

    </thead>
);

GridHeader.propTypes = {
    columns: PropTypes.instanceOf(Array).isRequired,
    onColumnSelect: PropTypes.instanceOf(Function).isRequired
};

export default GridHeader;
