import {delay} from 'redux-saga';
import { take, put, call, apply} from 'redux-saga/effects';
import axios from 'axios';

import  * as TYPES from '../actions/actionTypes';


import {API_URL} from '../../constants';
// import {log} from '../../../helpers';

const getUserInfo = (id) => {
       return axios({
            method:"GET",
            url:`${API_URL}/currentUser/${id}`,
        }).then(response => {
            log("THE AXIOS RESPONSE", response.data);
            return response.data
        }).catch(e => {
            // console.log(e.message)
        }) 
}

export function* currentUserSaga () {
    const { payload: id } = yield take (TYPES.GET_CURRENT_USER_INFO);

    const data = yield call (getUserInfo,id);

    yield put({type: TYPES.GET_CURRENT_USER_INFO_SUCCESS, payload: data});
   log("ID: ", id);

}

