import {SHOP_DATA} from "./shop.data";
import {UPDATE_COLLECTIONS} from "../actionTypes";


const INITIAL_DATA = {
    collections: SHOP_DATA
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