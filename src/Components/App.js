import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer, watchLoadData } from '../Redux/Reducks';
import { logger } from 'redux-logger/src';
import createSagaMiddleware from 'redux-saga'
import ListItemContainer from './List/ListItem/ListItemContainer';
import ListDetailsComponent from './List/ListDetailsComponent';

const App = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,
        compose(applyMiddleware(
            sagaMiddleware,
            logger
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
    sagaMiddleware.run(watchLoadData);
    
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
