import { take, put, call, apply} from 'redux-saga/effects';
import axios from 'axios';
import {API_URL} from '../../constants';

import {GET_CURRENT_USER_INFO,
    GET_CURRENT_USER_INFO_SUCCESS,
    setCurrentUser,
    GET_LOAN_BALANCES,
    } 
from '../actions/actionTypes';


const getUserLoanBalance = (id) => {
    return axios({
         method:"GET",
         url:`${API_URL}/loanBalances?id=${id}`,
     }).then(response => {
         console.log("THE AXIOS RESPONSE", response.data);
         return response.data
     }).catch(e => {
         console.log(e.message)
     }) 
}

export function* fetchLoanBalanceSaga(){
    const { payload: id } = yield take (GET_CURRENT_USER_INFO);
    console.log("LOAN BALANCES ID::", id); 
    const response = yield call (getUserLoanBalance,id);
    // console.log("LOAN BALANCES") 
    yield put({type: GET_LOAN_BALANCES, payload: response})
    console.log("END BALANCES HERE:" , response);
}  