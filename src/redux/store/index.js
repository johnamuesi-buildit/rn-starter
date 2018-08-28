import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import _ from 'lodash';

import initialState from './initialState.json';
// let state = initialState;
let state = {};

import createSagaMiddleware from 'redux-saga';
import {initSagas} from './initSagas';

import {
    errorReducer,
    taskReducer, 
    loanBalanceReducer, 
    transactionReducer,
    userReducer,
    authenticationReducer 
} from '../reducers/';

const logger = createLogger({
    timestamp: true
})
const sagaMiddleware = createSagaMiddleware();
const middlewares = _.compact([sagaMiddleware, thunk, logger])

const rootReducer = combineReducers({
    tasks: taskReducer,
    errors: errorReducer,
    loanBalances: loanBalanceReducer,
    transactions: transactionReducer,
    user: userReducer,
    auth:authenticationReducer
});

const storeMiddleWare = applyMiddleware(...middlewares)


export default store = createStore(
    rootReducer,
    state,
    storeMiddleWare
)

// console.info('Saga middleware implemented');
initSagas(sagaMiddleware)