import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListItemContainer from './List/ListItem/ListItemContainer';
import ListDetailsComponent from './List/ListDetailsComponent';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={ListItemContainer}/>
            <Route exact path="/details" component={ListDetailsComponent}/>
        </Router>
    )
}


export default App;
