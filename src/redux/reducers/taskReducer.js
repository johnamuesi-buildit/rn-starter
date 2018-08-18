import {CREATE_TASK} from '../actions/actionTypes';
const INITIAL_STATE = {
    tasks:[]
}

export default {taskReducer} = (state = INITIAL_STATE, action)  => {
    switch(action.type){
        case CREATE_TASK:
        return {
            ...state,
            tasks: [...state.tasks, action.payload]


        }
        default:
        return state;
    }
}