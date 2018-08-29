import * as TYPES from '../actions/actionTypes';
const INITIAL_STATE = {
  requesting:false,
  successful: false,
  messages:[],
  errors:[]
}

export default {authenticationReducer} = (state = INITIAL_STATE, action)  => {
    switch(action.type){
        case TYPES.LOGIN_REQUEST:
        return {
         requesting: true,
         successful: false,
         messages:[{body: 'Logging in...', time: new Date()}],
         errors:[]
        }
        case TYPES.LOGIN_SUCCESS:
        return {
            errors:[],
            messages:[],
            requesting: false,
            successful: true
        }
        case TYPES.LOGIN_ERROR:
        return {
            ...state,
            errors:errors.concat([{
                body: action.error.toString(),
                time: new Date()
            }]),
            messages:[],
            requesting: false,
            successful: false
        }
        default:
        return state;
    }
}