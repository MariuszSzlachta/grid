import PropTypes from "prop-types";
import React from "react";
import PrevIcon from "Assets/icons/back.svg";

import "./arrowButton.scss";

const ArrowButton = ({ clickHandler, classNameModifier, isDisabled }) => (
    <button
        type="button"
        className="arrow-button"
        onClick={clickHandler}
        disabled={isDisabled}
    >
        <img
            className={`arrow arrow--${classNameModifier}`}
            src={PrevIcon}
            alt="triangular icon"
        />
    </button>

);

ArrowButton.propTypes = {
    clickHandler: PropTypes.instanceOf(Function).isRequired,
    classNameModifier: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
};

export default ArrowButton;
