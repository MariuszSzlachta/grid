import PropTypes from "prop-types";
import { ALL_RECORDS_MARK } from "Common/Enums";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";

const PaginationProvider = ({ fetchedData, children }) => {
    const [pages, setPages] = useState([]);
    const [pageSize, setPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(null);
    const [dataDisplayedOnCurrentPage, setDataToDisplayOnCurrentPage] = useState(null);

    const createPages = useCallback(data => {
        if (pageSize === ALL_RECORDS_MARK) {
            const slicedData = _.chunk(data, data && data.length);
            return setPages(slicedData);
        }

        const slicedData = _.chunk(data, pageSize);
        return setPages(slicedData);
    }, [pageSize]);

    const setNextPage = () => {
        if (currentPage < pageCount) {
            const incrementedPage = currentPage + 1;
            setCurrentPage(incrementedPage);
        }
    };

    const setPreviousPage = () => {
        if (currentPage !== 0) {
            const decrementedPage = currentPage - 1;
            setCurrentPage(decrementedPage);
        }
    };

    const setFirstPage = () => {
        setCurrentPage(0);
    };

    const setLastPage = () => {
        setCurrentPage(pageCount - 1);
    };

    const pageSizeHandler = value => {
        setPageSize(value);
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [pageSize, pageCount]);

    useEffect(() => {
        createPages(fetchedData);
    }, [createPages, fetchedData, pageSize]);

    useEffect(() => {
        setPageCount(pages.length);
        setDataToDisplayOnCurrentPage(pages[currentPage]);
    }, [currentPage, pages]);


    if (dataDisplayedOnCurrentPage) {
        return (
            children(
                dataDisplayedOnCurrentPage,
                currentPage,
                pageCount,
                pageSize,
                setFirstPage,
                setLastPage,
                setPreviousPage,
                setNextPage,
                pageSizeHandler
            )
        );
    }

    return <div>aaa</div>;
};

export default PaginationProvider;

PaginationProvider.propTypes = {
    children: PropTypes.instanceOf(Function).isRequired,
    fetchedData: PropTypes.instanceOf(Array).isRequired
};
