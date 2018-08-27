
import {delay} from 'redux-saga';
import { take, put, call, apply} from 'redux-saga/effects'; 
import axios from 'axios';

import {GET_TRANSACTIONS,
    GET_TRANSACTIONS_SUCCESS
    } 
from '../actions/actionTypes';

import {API_URL} from '../../constants';

const getTransactions = ()  => {
    return axios({
         method:"GET",
         url:`${API_URL}/transactions`,
     }).then(response => {
         log("THE AXIOS RESPONSE", response.data);
         return response.data
     }).catch(e => {
         log(e.message)
     }) 
}

export function* loadTransactions(action){
    try
    {
        const transactions = yield call(getTransactions);
        log("MORE TRANSACTIONS", transactions)
        yield put({type: GET_TRANSACTIONS_SUCCESS, payload: transactions})
    }catch (e){
        log(e)
    }
}
