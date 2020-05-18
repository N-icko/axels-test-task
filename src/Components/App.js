import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import ListItemContainer from './List/ListItem/ListItemContainer';
import ListDetailsComponent from './List/ListDetailsComponent';
import { store } from '../Redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={ListItemContainer}/>
                <Route exact path="/details" component={ListDetailsComponent}/>
            </Router>
        </Provider>
    )
}

export default App;
