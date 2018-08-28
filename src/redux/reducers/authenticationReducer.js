import * as TYPES from '../actions/actionTypes';
const INITIAL_STATE = {
    auth:[]
}

export default {authenticationReducer} = (state = INITIAL_STATE, action)  => {
    switch(action.type){
        case TYPES.LOGIN_REQUESTING:
        return {
         
        }
        case TYPES.LOGIN_SUCCESS:
        return {
            
        }
        case TYPES.LOGIN_ERROR:
        return {
            ...state,
            ...action.payload,
        }
        default:
        return state;
    }
}