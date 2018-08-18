import {CREATE_TASK} from  './actionTypes';

export const createTask = () => {

    let task = {}

    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const getTask = () => {

}