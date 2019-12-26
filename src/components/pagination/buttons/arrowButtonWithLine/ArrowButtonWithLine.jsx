import PropTypes from "prop-types";
import React from "react";
import BackIcon from "Assets/icons/prev.svg";

import "./arrowButtonWithLine.scss";

const ArrowButtonWithLine = ({ clickHandler, classNameModifier, isDisabled }) => (
    <button
        type="button"
        className="arrow-button-with-line"
        onClick={clickHandler}
        disabled={isDisabled}
    >
        <img
            className={`arrow-with-line arrow-with-line--${classNameModifier}`}
            src={BackIcon}
            alt="triangular icon with block"
        />
    </button>
);

ArrowButtonWithLine.propTypes = {
    clickHandler: PropTypes.instanceOf(Function).isRequired,
    classNameModifier: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
};

export default ArrowButtonWithLine;
