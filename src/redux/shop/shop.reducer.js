import {SHOP_DATA} from "./shop.data";

const INITIAL_DATA = {
    collections: SHOP_DATA
}

export const shopReducer = (state=INITIAL_DATA, actions) => {
  switch (actions.type) {
      default:
          return state
  }
}