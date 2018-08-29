import * as TYPES from './actionTypes';



export const loginRequest = ({email, password}) => {
    return{
        type: TYPES.LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    }
}
export const loginSuccess = () => {

}
export const loginError = () => {

}

