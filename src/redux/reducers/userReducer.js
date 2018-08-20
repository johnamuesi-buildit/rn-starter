import {GET_CURRENT_USER_INFO} 
from '../actions/actionTypes';

const INITIAL_STATE = {
    currentUser:null
}

export default {userReducer} = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_CURRENT_USER_INFO:
        return {
            ...state,
            currentUser:  action.payload
        }
        default:
        return state;
    }
}