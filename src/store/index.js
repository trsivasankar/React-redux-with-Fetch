import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
// import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';

let store = createStore(reducers, applyMiddleware(promiseMiddleware,logger));

export default store;