import {GET_TRANSACTIONS,
    GET_TRANSACTIONS_SUCCESS} 
from '../actions/actionTypes';

const INITIAL_STATE = {
    transactions:[],
    isLoading:false
}

export default {loanBalanceReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_TRANSACTIONS:
        return {
            ...state,
            isLoading:true
        }
        case GET_TRANSACTIONS_SUCCESS:
        return {
            ...state,
            isLoading:false,
            payload:transactions
        }
        default:
        return state;
    }
}