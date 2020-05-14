import React, { Component } from 'react';
import ListItemContainer from "./List/ListItem/ListItemContainer";
import ListDetailsComponent from "./List/ListDetailsComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Router>
                <Route exact path="/" component={ListItemContainer}/>
                <Route exact path="/details" component={ListDetailsComponent}/>
            </Router>
        )
    }
}

export default App;
