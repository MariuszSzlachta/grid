import PropTypes from "prop-types";
import React from "react";
import "./currentPageIndicator.scss";

const CurrentPageIndicator = ({ currentPage }) => (
    <span className="current-page-indicator">
        {currentPage + 1}
    </span>
);

CurrentPageIndicator.propTypes = {
    currentPage: PropTypes.number.isRequired
};

export default CurrentPageIndicator;
