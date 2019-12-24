import PropTypes from "prop-types";
import React from "react";

import "./cell.scss";

const Cell = ({ content }) => (
    <td className="grid-cell">
        {content}
    </td>
);

Cell.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number,
        PropTypes.instanceOf(Date).isRequired
    ]).isRequired
};

export default Cell;
