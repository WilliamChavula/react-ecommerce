import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../actionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
})