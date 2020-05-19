import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from '../Redux/store'

import { ListDetailsComponent, ListItemContainer } from './index';

const App = () =>
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={ListItemContainer}/>
            <Route exact path="/details/:id" component={ListDetailsComponent}/>
        </Router>
    </Provider>

export default App;
