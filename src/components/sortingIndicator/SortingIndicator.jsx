import PropTypes from "prop-types";
import React from "react";
import Image from "Assets/icons/back.svg";
import { SORT_ORDERS } from "Common/Enums";

import "./sortingIndicator.scss";

const SortingIndicator = ({ value }) => {
    const modifier = value === SORT_ORDERS.ASC ? "asc" : "desc";

    if (value !== SORT_ORDERS.NONE) {
        return (
            <img className={`sorting-indicator sorting-indicator--${modifier}`} src={Image} alt="triangle icon" />
        );
    }

    return null;
};

export default SortingIndicator;

SortingIndicator.propTypes = {
    value: PropTypes.string.isRequired
};
