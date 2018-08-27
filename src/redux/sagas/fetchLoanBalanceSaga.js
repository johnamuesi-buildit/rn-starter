import { take, put, call, apply, fork} from 'redux-saga/effects';
import axios from 'axios';
import {API_URL} from '../../constants';

import  * as TYPES from '../actions/actionTypes';

import {
    setLoanBalances
    
    } 
from '../actions/';


const getUserLoanBalance = (id) => {
    return axios({
         method:"GET",
         url:`${API_URL}/loanBalances?id=${id}`,
     }).then(response => {
        //  console.log("THE AXIOS RESPONSE", response.data);
         return response.data
     }).catch(e => {
      log(e.message)
     }) 
}

export function* fetchLoanBalanceSaga(){
    const { payload: id } = yield take (TYPES.GET_CURRENT_USER_INFO);
    // console.log("LOAN BALANCES ID::", id); 
    const response = yield call (getUserLoanBalance,id);
    // console.log("LOAN BALANCES") 
   // yield put({type: GET_LOAN_BALANCES, payload: response})
    yield put(setLoanBalances(response));
}  