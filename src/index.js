import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import { store } from './Redux/store';
import App from "./Components/App";

const AppWrapper = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

ReactDOM.render(<AppWrapper/>, document.getElementById("root"));
