import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../actionTypes";
import {addItemToCart} from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
      case TOGGLE_CART_HIDDEN:
          return {
              ...state,
              hidden: !state.hidden
          }
      case ADD_ITEM:
          return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload)
          }
      default:
          return state
  }
}