import PropTypes from "prop-types";
import React from "react";

import "./input.scss";

const Input = ({ onValueChange, value }) => (
    <label htmlFor="filter-input" className="filter-input">
        <span className="filter-input__label">
                filter:
        </span>
        <input
            value={value}
            placeholder="enter query filter"
            id="filter-input"
            type="text"
            name="filter-input"
            className="filter-input__field"
            onChange={e => onValueChange(e.target.value)}
        />
    </label>
);

Input.propTypes = {
    value: PropTypes.string,
    onValueChange: PropTypes.instanceOf(Function).isRequired
};

Input.defaultProps = {
    value: ""
};

export default Input;
