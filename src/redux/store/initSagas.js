import * as sagas from '../sagas';

export const initSagas = (sagaMiddleware) => {
    // bind each saga to middleware
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    
}