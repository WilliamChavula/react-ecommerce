import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE
} from "../actionTypes";


const initialState = {
    currentUser: null,
    error: undefined
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case SIGN_IN_SUCCESS:
          return {
              ...state,
              currentUser: action.payload,
              error: undefined
          }
      case SIGN_IN_FAILURE:
          return {
              ...state,
              error: action.payload
          }
      default:
          return state
  }
}