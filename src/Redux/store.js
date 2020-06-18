import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer, watchLoadData } from './re-ducks';
import { logger } from 'redux-logger/src';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,
  compose(applyMiddleware(
    sagaMiddleware,
    logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
sagaMiddleware.run(watchLoadData);

