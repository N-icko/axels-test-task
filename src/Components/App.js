import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ListDetailsComponent, ListItemContainer } from "./index";

const App = () => 
	<Router>
		<Route exact path="/" component={ListItemContainer} />
		<Route exact path="/details" component={ListDetailsComponent} />
	</Router>
;

export default App;
