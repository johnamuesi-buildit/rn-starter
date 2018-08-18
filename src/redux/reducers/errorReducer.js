import { GET_ERRORS, CLEAR_ERRORS } from '../actions/actionTypes'

INITIAL_STATE = {
  errors: []
}

export default ({ errorReducer } = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:

    case CLEAR_ERRORS:
      return {
        ...state,
      }

      return state
  }
})
