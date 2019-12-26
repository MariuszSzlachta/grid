import Pagination from "Components/pagination/Pagination";
import PaginationProvider from "Containers/paginationProvider/PaginationProvider";
import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "Containers/dataProvider/DataProvider";
import Grid from "Containers/grid/Grid";

import "./styles/index.scss";

const App = () => (
    <DataProvider>
        {data => (
            <PaginationProvider fetchedData={data}>
                {(
                    dataDisplayedOnCurrentPage,
                    currentPage,
                    pageCount,
                    pageSize,
                    setFirstPage,
                    setLastPage,
                    setPreviousPage,
                    setNextPage,
                    pageSizeHandler
                ) => (
                    <>
                        <Grid data={dataDisplayedOnCurrentPage} />
                        <Pagination
                            currentPage={currentPage}
                            pageCount={pageCount}
                            pageSize={pageSize}
                            setFirstPage={setFirstPage}
                            setLastPage={setLastPage}
                            setPrevPage={setPreviousPage}
                            setNextPage={setNextPage}
                            setPageSize={pageSizeHandler}
                        />
                    </>
                )}
            </PaginationProvider>
        )}
    </DataProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
