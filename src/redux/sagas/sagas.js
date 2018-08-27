import {takeLatest} from 'redux-saga/effects'; // takeLatest 'listens' to store for the given Action Type and when its dispatched will invoke the given generator function'

import * as TYPES from '../actions/actionTypes';
import {getTransactions} from '../actions';


export function* myTransactions(){
    yield takeLatest(TYPES.GET_TRANSACTIONS, getTransactions)
}

