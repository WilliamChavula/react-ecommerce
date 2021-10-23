import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_COLLECTIONS_START } from "../../redux/actionTypes";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {fetchCollectionFailure, fetchCollectionSuccess} from "../../redux/shop/shop.actions";

export function* fetchCollectionsAsync() {
    try {
        // get reference to the project firestore database
        const db = getFirestore()

        // get collection reference
        const collectionRef = collection(db, 'collections')

        // the yield key handles making the async call to firebase.
        // it waits until the call is resolved before yielding the data
        const querySnap = yield getDocs(collectionRef);

        // the call function takes a function reference as it's first argument.
        // the second argument to the call is the arguments to the function passed in
        // we use yield with call in case the call takes time
        // this allows us to defer control back to the saga middleware
        const collectionMap =  yield call(convertCollectionsSnapshotToMap, querySnap)

        // put is redux-saga's version of calling dispatch to update state in the reducers
        yield put(fetchCollectionSuccess(collectionMap))
    }
    catch (e) {
        yield put(fetchCollectionFailure(e.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

