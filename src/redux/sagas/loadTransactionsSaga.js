
import {delay} from 'redux-saga';
import { take, put, call, apply, race, all, select} from 'redux-saga/effects'; 
import axios from 'axios';

import  * as TYPES from '../actions/actionTypes';

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
const getTasks = ()  => {
    return axios({
         method:"GET",
         url:`${API_URL}/tasks`,
     }).then(response => {
         log("THE TASKS RESPONSE", response.data);
         return response.data
     }).catch(e => {
         log(e.message)
     }) 
}

export function* loadTransactions(action){
    try
    {   const selector = yield select(state => state.transactions);
        console.log("Transactions before yield", selector)
        yield take(TYPES.CONFIRMATION) // take, blocking effect

        const transactions = yield call(getTransactions); // call blocking effect in yield waits for data to return 
        log("MORE TRANSACTIONS", transactions)
        yield put({type: TYPES.GET_TRANSACTIONS_SUCCESS, payload: transactions})
    }catch (e){
        log(e)
    }
}

export function* loadTasks(action){
    try
    {   
        const tasks = yield call(getTasks); // call blocking effect in yield waits for data to return 
        log("LOAD TASKS", tasks)
        yield put({type: TYPES.GET_TASKS_SUCCESS, payload: tasks})
    }catch (e){
        log(e)
    }
}


