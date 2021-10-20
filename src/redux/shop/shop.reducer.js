import {FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from "../actionTypes";


const INITIAL_DATA = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

export const shopReducer = (state=INITIAL_DATA, actions) => {
  switch (actions.type) {
      case FETCH_COLLECTIONS_START:
          return {
              ...state,
              isFetching: true
          }
      case FETCH_COLLECTIONS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              collections: actions.payload
          }
      case FETCH_COLLECTIONS_FAILURE:
          return {
              ...state,
              isFetching: false,
              errorMessage: actions.payload
          }
      default:
          return state
  }
}