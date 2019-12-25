import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "Containers/dataProvider/DataProvider";
import Grid from "Containers/grid/Grid";

import "./styles/index.scss";

const App = () => (
    <>
        <DataProvider>
            {dataToShow => (
                <Grid data={dataToShow} />
            )}
        </DataProvider>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
