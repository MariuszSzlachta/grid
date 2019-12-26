import PropTypes from "prop-types";
import React from "react";
import { ALL_RECORDS_MARK } from "Common/Enums";

import "./pageSizeSelect.scss";

const PageSizeSelect = ({ pageSize, setPageSize }) => (
    <select
        className="page-size-select"
        onChange={event => setPageSize(event.target.value)}
        value={pageSize}
    >
        <option className="page-size-select__option" value={ALL_RECORDS_MARK}>all</option>
        <option className="page-size-select__option" value={20}>20</option>
        <option className="page-size-select__option" value={50}>50</option>
        <option className="page-size-select__option" value={100}>100</option>
    </select>
);

PageSizeSelect.propTypes = {
    pageSize: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    setPageSize: PropTypes.instanceOf(Function).isRequired
};

export default PageSizeSelect;
