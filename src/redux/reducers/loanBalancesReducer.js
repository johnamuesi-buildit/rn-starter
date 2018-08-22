import {GET_LOAN_BALANCES} 
from '../actions/actionTypes';

const INITIAL_STATE = []

export default {loanBalanceReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_LOAN_BALANCES:
        // return {
        //     ...state,
        //     loanBalances: action.payload
        // }
        return [
            ...action.payload,
        ];
        default:
        return state;
    }
}