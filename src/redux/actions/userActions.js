import {
 GET_CURRENT_USER_INFO,
 SET_CURRENT_USER_INFO
 
} from './actionTypes'


export const setCurrentUser = () => {
    return{
        type: SET_CURRENT_USER_INFO
    }
}
export const getCurrentUserInfo = (user) => {
     return{
         type: GET_CURRENT_USER_INFO,
         payload: user
     }
}