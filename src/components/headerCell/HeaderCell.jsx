import PropTypes from "prop-types";
import React from "react";
import { SORT_ORDERS } from "Common/Enums";
import SortingIndicator from "Components/sortingIndicator/SortingIndicator";

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
                {name.split(/(?=[A-Z])/).map(word => word.toLowerCase()).join(" ")}
            </span>
            <SortingIndicator value={sortOrder} />
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
