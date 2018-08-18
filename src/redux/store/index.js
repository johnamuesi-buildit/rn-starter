import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import _ from 'lodash';

import initialState from './initialState.json';
let state = initialState;


import {errorReducer,taskReducer, loanBalanceReducer, transactionReducer } from '../reducers/';

const logger = createLogger({
    timestamp: true
})

const middlewares = _.compact([thunk, logger])

const rootReducer = combineReducers({
    tasks: taskReducer,
    errors: errorReducer,
    loanBalances: loanBalanceReducer,
    transactions: transactionReducer
});

const storeMiddleWare = applyMiddleware(...middlewares)

export default store = createStore(
    rootReducer,
    state,
    storeMiddleWare
)