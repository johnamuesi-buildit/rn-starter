import {delay} from 'redux-saga';
import { take, put, call, apply} from 'redux-saga/effects';
import axios from 'axios';


import {GET_CURRENT_USER_INFO} 
from '../actions/actionTypes';

import {setCurrentUser} from '../actions';

export function* currentUserSaga () {
    const { payload: id } = yield take (GET_CURRENT_USER_INFO);
    const response = yield axios({
        method:"GET",
        url:`http://localhost:3000/currentUser/${id}`,
    })

    console.info("ID: ", id);
    console.log('Data:', response);

}

 // while(true){
    //     yield delay(1000);
    //     console.info('User Saga loop')
    // }