import PropTypes from "prop-types";
import React from "react";
import { SORT_ORDERS } from "Common/Enums";

import "./gridHeaderCell.scss";

const GridHeaderCell = ({ sortedBy, content, onClick }) => (
    <th
        className="grid-header-cell"
        onClick={() => onClick(content, sortedBy)}
    >
        <span>
            {content}
        </span>
        <span>{sortedBy}</span>
    </th>
);

GridHeaderCell.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]).isRequired,
    sortedBy: PropTypes.oneOf(Object.values(SORT_ORDERS)).isRequired,
    onClick: PropTypes.instanceOf(Function).isRequired
};

export default GridHeaderCell;
