import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import * as TYPES from '../actions/actionTypes'

function* loginApi(email, password) {
  yield
}

function* logOut() {
  yield
}

// background task
function* loginFlow(email, password) {
yield;
 
}

// our auth watcher checking for Login request Action
function* loginWatcher() {
  while (true) {
    // stops at every yield statement
    // loop only progresses when login is 'requested'
    const { email, password } = yield take(TYPES.LOGIN_REQUEST)

    // create a login task - non blocking
    const loginTask = yield fork(loginFlow, email, password)

    // watch for any errors or unsetting client app
    const action = yield take([TYPES.CLIENT_UNSET, TYPES.LOGIN_ERROR])
    // unset is for if user repeatedly spams logout button for example while logging etc

    if (action.type === TYPES.CLIENT_UNSET) yield cancel(loginTask)

    // finally logout and restart loop
    yield call(logOut)
  }
}

export { loginWatcher }
