import {all, call} from "redux-saga/effects";
import {fetchCollectionsStart} from "../pages/shop/shop.saga";
import {userSagas} from "./user/user.saga";


export default function* rootSaga() {
    // all spawns up sagas concurrently. That way our app state loads at the same time instead of running synchronously.
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}
