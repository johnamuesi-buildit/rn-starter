import {take, fork, put, select} from 'redux-saga/effects'
import {loanBalanceReducer} from '../reducers'
import axios from 'axios';
import store from '../store'

import {SET_LOAN_BALANCES
    } 
from '../actions/actionTypes';

import {
    setLoanBalances
    
    } 
from '../actions/';
import { arrayOfDeffered } from 'redux-saga/utils';


loadBalanceDetails = (balance) => {
  
    console.info("BALANCE ITEM", balance)
}

export function* loanBalanceDetailSaga(){
    const balanceList = (state) => state.loanBalances;
    const balances = yield select (balanceList);
    console.log("FUCKING WORK!!!!", balances);

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

    // its empty to begin then gets poulated on a look up basd on the userid
    // look at the start of console then after
}