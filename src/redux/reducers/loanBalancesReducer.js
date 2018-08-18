import {GET_BALANCE} 
from '../actions/actionTypes';

const INITIAL_STATE = {
    loanBalances:[]
}

export default {loanBalanceReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_BALANCE:
        return {
            ...state,
            loanBalances: action.payload
        }
        default:
        return state;
    }
}