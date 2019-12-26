import PageSizeSelect from "Components/pagination/pageSizeSelect/PageSizeSelect";
import PropTypes from "prop-types";
import React from "react";
import CurrentPageIndicator from "Components/pagination/currentPageIndicator/CurrentPageIndicator";
import ArrowButton from "Components/pagination/buttons/arrowButton/ArrowButton";
import ArrowButtonWithLine from "Components/pagination/buttons/arrowButtonWithLine/ArrowButtonWithLine";

import "./pagination.scss";

const Pagination = ({
    currentPage,
    pageCount,
    pageSize,
    setPrevPage,
    setNextPage,
    setFirstPage,
    setLastPage,
    setPageSize
}) => (
    <div className="pagination">
        <div className="pagination-items-wrapper">
            <ArrowButtonWithLine
                classNameModifier="begin"
                isDisabled={currentPage === 0}
                clickHandler={setFirstPage}
            />
            <ArrowButton
                classNameModifier="prev"
                isDisabled={currentPage === 0}
                clickHandler={setPrevPage}
            />
            <CurrentPageIndicator currentPage={currentPage} />
            <ArrowButton
                classNameModifier="next"
                isDisabled={currentPage === pageCount - 1}
                clickHandler={setNextPage}
            />
            <ArrowButtonWithLine
                classNameModifier="end"
                isDisabled={currentPage === pageCount - 1}
                clickHandler={setLastPage}
            />
        </div>
        <div className="pagination-items-wrapper">
            <PageSizeSelect pageSize={pageSize} setPageSize={setPageSize} />
        </div>
    </div>
);

export default Pagination;

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageSize: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    setFirstPage: PropTypes.instanceOf(Function).isRequired,
    setLastPage: PropTypes.instanceOf(Function).isRequired,
    setNextPage: PropTypes.instanceOf(Function).isRequired,
    setPrevPage: PropTypes.instanceOf(Function).isRequired,
    setPageSize: PropTypes.instanceOf(Function).isRequired
};
