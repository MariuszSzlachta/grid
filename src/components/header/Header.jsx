import PropTypes from "prop-types";
import React from "react";
import GridHeaderCell from "Components/headerCell/HeaderCell";

import "./header.scss";

const Header = ({ columns, onColumnSelect, currentSortParameters }) => (
    <thead className="grid-header">
        <tr className="grid-header__row">
            {columns.map(column => (
                <GridHeaderCell
                    key={column.columnName}
                    onClick={onColumnSelect}
                    defaultSortOrder={column.sortedBy}
                    name={column.columnName}
                    currentSortParameters={currentSortParameters}
                />
            ))}
        </tr>

    </thead>
);

Header.propTypes = {
    columns: PropTypes.instanceOf(Array).isRequired,
    onColumnSelect: PropTypes.instanceOf(Function).isRequired,
    currentSortParameters: PropTypes.instanceOf(Object).isRequired
};

export default Header;
