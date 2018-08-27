import * as TYPES from '../actions/actionTypes';
const INITIAL_STATE = {
    tasks:[]
}

export default {taskReducer} = (state = INITIAL_STATE, action)  => {
    switch(action.type){
        case TYPES.CREATE_TASK:
        return {
            ...state,
            task: [
                ...state.tasks, 
                action.payload
            ]
        }
        case TYPES.GET_TASKS:
        return {
            ...state,
            tasks: [
                ...state.tasks, 
                action.payload
            ]
        }
        case TYPES.GET_TASKS_SUCCESS:
        return {
            ...state,
            ...action.payload,
        }
        default:
        return state;
    }
}