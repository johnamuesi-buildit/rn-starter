import {GET_TRANSACTION} 
from '../actions/actionTypes';

const INITIAL_STATE = {
    transactions:[]
}

export default {loanBalanceReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_TRANSACTION:
        return {
            ...state,
            transactions: action.payload
        }
        default:
        return state;
    }
}