import React, { useState } from "react";

const stub = [
    { id: 205, name: "Kohler, Runolfsdottir and Kuhlman", city: "Prosaccomouth" },
    { id: 6, name: "Jacobson, Bashirian and Ortiz", city: "Lake Jay" },
    { id: 91, name: "Borer and Sons", city: "Mrazmouth" },
    { id: 62, name: "Mills, Steuber and Barrows", city: "New Ayla" },
    { id: 187, name: "Rice, Schiller and Jakubowski", city: "South Granville" }
];

const withPagination = dataProvider => props => {
    const [offset, setOffset] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState("*");
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(null);


    return (
        <div>
            <div>data provider</div>
            <div>paginacja</div>
        </div>
    );
};

export default withPagination;
