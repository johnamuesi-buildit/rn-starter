import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import _ from 'lodash';
import taskReducer from '../reducers/taskReducer';

const logger = createLogger({
    timestamp: true
})

const middlewares = _.compact([thunk, logger])

const rootReducer = combineReducers({
    tasks: taskReducer
});

const storeMiddleWare = applyMiddleware(...middlewares)

export default store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)