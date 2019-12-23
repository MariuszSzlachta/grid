import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const App = () => {
    const [data, setData] = useState(null);
    const baseUrl = "http://localhost:9000";

    const getList = async () => {
        const { data } = await axios.get(baseUrl+"/testAPI");
        setData(data);
    };

    return (
        <>
            <button onClick={getList}>get</button>
            <div>Hello world!</div>
            <div>{`this is data: ${data}`}</div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
