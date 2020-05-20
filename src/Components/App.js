import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ListDetailsComponent, ListItemComponent } from "./index";
import { useDispatch } from 'react-redux';
import { loadData } from '../Redux/re-ducks';

const App = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadData())
    })
    
    return (
        <Router>
            <Route exact path="/" component={ListItemComponent}/>
            <Route exact path="/details/:id" component={ListDetailsComponent}/>
        </Router>)
}
export default App;
