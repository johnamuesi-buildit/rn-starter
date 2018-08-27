import {takeLatest, all} from 'redux-saga/effects'; 
// takeLatest is a saga helper
// takeLatest 'listens' to store for the given Action Type and when its dispatched will invoke the given generator function'

import * as TYPES from '../actions/actionTypes';
import {
    getTransactions, 
    getTasks

} from '../actions';


export function* myTransactions(){
    yield all ([ // like promise all
        takeLatest(TYPES.GET_TRANSACTIONS, getTransactions),
        takeLatest(TYPES.GET_TASKS, getTasks)
    ])
}

