import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { DEFAULT_GRID_BODY_HEIGHT } from "Common/Enums";
import GridRow from "Components/gridRow/GridRow";

import "Containers/gridBody/gridBody.scss";

const GridBody = ({ data }) => {
    const [classNameModifier, setClassNameModifier] = useState("");
    const bodyRef = useRef(null);

    useEffect(() => {
        const childrenAbsoluteHeight = Array.from(bodyRef.current.children)
            .map(el => el.clientHeight)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const isGridBodyScrolled = childrenAbsoluteHeight >= DEFAULT_GRID_BODY_HEIGHT;

        if (isGridBodyScrolled) {
            setClassNameModifier("grid-body--scrolled");
        }
    }, []);


    return (
        <tbody
            className={`grid-body ${classNameModifier}`}
            ref={bodyRef}
        >
            {data.map((row, index) => {
                const key = `grid-row__${index}`;
                return (
                    <GridRow
                        key={key}
                        data={row}
                    />
                );
            })}
        </tbody>
    );
};

GridBody.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired
};

export default GridBody;
