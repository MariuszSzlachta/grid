import React from "react";
import ReactDOM from "react-dom";
// import DataProvider from "Containers/dataProvider/DataProvider";
import Grid from "Containers/grid/Grid";

const stub = [
    {
        id: 205,
        name: "Kohler, Runolfsdottir and Kuhlman",
        city: "Prosaccomouth"
    },
    {
        id: 6,
        name: "Jacobson, Bashirian and Ortiz",
        city: "Lake Jay"
    },
    {
        id: 91,
        name: "Borer and Sons",
        city: "Mrazmouth"
    }
];

const App = () => (
    <>
        <Grid data={stub} />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
