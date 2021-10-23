import {all, call} from "redux-saga/effects";
import {shopSagas} from "./shop/shop.saga";
import {userSagas} from "./user/user.saga";
import {cartSagas} from "./cart/cart.saga";


export default function* rootSaga() {
    // all spawns up sagas concurrently. That way our app state loads at the same time instead of running synchronously.
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}
