import {
 GET_CURRENT_USER_INFO,
 SET_CURRENT_USER,
 GET_CURRENT_USER_INFO_SUCCESS,
 SET_LOAN_BALANCE,
 GET_LOAN_BALANCES
 
} from './actionTypes'


export const setCurrentUser = (user) => {
    return{
        type: SET_CURRENT_USER,
        payload: user
    }
}
export const getCurrentUserInfo = (user) => {
     return{
         type: GET_CURRENT_USER_INFO,
         payload: user
     }
}
export const getCurrentUserInfoSuccess = (user) => {
     return{
         type: GET_CURRENT_USER_INFO_SUCCESS,
         payload: user
     }
}

export const setLoanBalance = () => {
    return{
        type: SET_CURRENT_USER_INFO
    }
}

export const getLoanBalances = (loanBalances) => {
    return{
        type: GET_LOAN_BALANCES,
        payload: loanBalances
    }
}