import {
    GET_CURRENT_USER_INFO,
    GET_CURRENT_USER_INFO_SUCCESS,
    SET_CURRENT_USER,
    GET_LOAN_BALANCES
} 
from '../actions/actionTypes';

const INITIAL_STATE = {
    currentUser:{
        "username": "",
        "id": "",
        "firstName": "",
        "lastName": ""
    },
    isFetching:false,
    getUserSuccess:false,
}

export default {userReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_CURRENT_USER_INFO:
        return {
            ...state,
            isFetching: true,

        }
        case GET_CURRENT_USER_INFO_SUCCESS:
        return{
            ...state,
            isFetching: false,
            getUserSuccess:true,
            currentUser:  action.payload
        }

        case SET_CURRENT_USER:
        return{
            ...state,
            currentUser:  action.payload
        }


        default:
        return state;
    }
}