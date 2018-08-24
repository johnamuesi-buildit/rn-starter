import {take, fork, put} from 'redux-saga/effects'
import axios from 'axios';

import {GET_CURRENT_USER_INFO,
    GET_CURRENT_USER_INFO_SUCCESS,
    setCurrentUser,
    GET_LOAN_BALANCES
    } 
from '../actions/actionTypes';

loadBalanceDetails = () => {
 
}

export function* loanBalanceDetailSaga(){
    const { balances } = yield take (GET_LOAN_BALANCES); // take effect pauses execution until action is dispatched
    console.log("LOAD BALANCES::", balances);
    yield;
  //  yield balances.map( balance =>  fork(loadBalanceDetails, balance))
}