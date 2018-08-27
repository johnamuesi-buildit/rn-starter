import * as TYPES from './actionTypes';


export const createTask = () => {
    return {
        type: TYPES.CREATE_TASK,
        payload: task
    }
}

export const getTasks = () => {
    return {
        type: TYPES.GET_TASKS,
    }
}
export const getTasksSuccess = (tasks) => {
    return {
        type: TYPES.GET_TASKS,
        payload: tasks
    }
}