import * as TYPES from './actionTypes';



export const loginRequest = ({email, password}) => {
    return{
        type: TYPES.LOGIN_REQUEST,
        payload: {
            
        }
    }
}
export const loginSuccess = () => {
    return{
        type: TYPES.LOGIN_SUCCESS,
        payload: {
            email,
            password
        }
    }
}
export const loginError = () => {
    return{
        type: TYPES.LOGIN_ERROR,
        payload: {
        
        }
    }
}

export const clientUnset = () => {
    return{
        type: TYPES.CLIENT_UNSET,
        payload: {
        
        }
    }
}


export const clientSet = () => {
    return{
        type: TYPES.CLIENT_SET,
        payload: {
        
        }
    }
}


