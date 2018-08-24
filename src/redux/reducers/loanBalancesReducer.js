import {
    GET_LOAN_BALANCES,
    SET_LOAN_BALANCES
} 
from '../actions/actionTypes';

const INITIAL_STATE = []

export default {loanBalanceReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_LOAN_BALANCES:
        return [
            ...action.payload,
        ];

        case SET_LOAN_BALANCES:
     
        return [
            ...state,
            ...action.payload,
        ];

        default:
        return state;
    }
}