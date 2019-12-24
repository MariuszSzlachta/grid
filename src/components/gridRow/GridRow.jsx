import PropTypes from "prop-types";
import React from "react";
import _ from "lodash";

import Cell from "App/components/cell/Cell";

import "./gridRow.scss";

const GridRow = ({ data }) => {
    const normalizedData = _.isArray(data) ? data : Object.values(data);

    return (
        <tr className="grid-row">
            {normalizedData.map((cell, index) => {
                const key = `grid-cell__${index}`;
                return (
                    <Cell
                        key={key}
                        content={cell}
                    />
                );
            })}
        </tr>
    );
};

export default GridRow;

GridRow.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.instanceOf(Array),
        PropTypes.instanceOf(Object)
    ]).isRequired
};
