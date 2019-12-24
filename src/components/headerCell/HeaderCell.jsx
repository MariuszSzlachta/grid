import PropTypes from "prop-types";
import React from "react";
import { SORT_ORDERS } from "Common/Enums";

import "./headerCell.scss";

const HeaderCell = ({
    currentSortParameters: {
        column,
        order
    },
    defaultSortOrder,
    name,
    onClick
}) => {
    const sortOrder = name === column ? order : defaultSortOrder;
    return (
        <th
            className="grid-header-cell"
            onClick={() => onClick(name, defaultSortOrder)}
        >
            <span className="grid-header-cell__name">
                {name}
            </span>
            <span className="grid-header-cell__icon">{sortOrder}</span>
        </th>
    );
};

HeaderCell.propTypes = {
    name: PropTypes.string.isRequired,
    defaultSortOrder: PropTypes.oneOf(Object.values(SORT_ORDERS)).isRequired,
    onClick: PropTypes.instanceOf(Function).isRequired,
    currentSortParameters: PropTypes.shape({
        column: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired
    }).isRequired
};

export default HeaderCell;
