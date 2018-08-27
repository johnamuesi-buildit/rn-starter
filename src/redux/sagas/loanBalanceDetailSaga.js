import {take, fork, put, select} from 'redux-saga/effects'
import {loanBalanceReducer} from '../reducers'
import axios from 'axios';
import store from '../store';
import {log} from '../../../helpers';

import  * as TYPES from '../actions/actionTypes';


import {
    setLoanBalances
    
    } 
from '../actions/';


loadBalanceDetails = (balance) => {
  
    console.info("BALANCE ITEM", balance)
}

export function* loanBalanceDetailSaga(){
    const balanceList = (state) => state.loanBalances;
    const balances = yield select (balanceList);
    log('Balances  ', balances);


    //??
    // console.log(getLoanBalancesList);
    // console.log('BALANCE LIST::::', getLoanBalancesList)
   // const balanceList = yield take()
    // const balances = yield select (getLoanBalances); // string rather than constamt
  // console.log("loanBalanceDetailSaga::: ", balances)
    // let task = []  
    // for(let i=0; i<balances.length; i++){
    //      task[i] = yield fork(loadBalanceDetails, balances[i])
    // }       
    // //I can't see this console
    // yield call(delay, 1000)

}