import {UPDATE_COLLECTIONS} from "../actionTypes";


const INITIAL_DATA = {
    collections: null
}

export const shopReducer = (state=INITIAL_DATA, actions) => {
  switch (actions.type) {
      case UPDATE_COLLECTIONS:
          return {
              ...state,
              collections: actions.payload
          }
      default:
          return state
  }
}