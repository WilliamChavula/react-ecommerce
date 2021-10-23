import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
} from "../actionTypes";
import {collection, getFirestore, getDocs } from "firebase/firestore";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return async dispatch => {
        const db = getFirestore()

        // get collection reference
        const collectionRef = collection(db, 'collections')

        // dispatch fetching start action to set loading: true
        dispatch(fetchCollectionsStart())

        try {
            // retrieve all documents in a collection using @function getDocs
            const querySnap = await getDocs(collectionRef);
            const collectionMap =  convertCollectionsSnapshotToMap(querySnap)

            // dispatch fetching success with data payload and set loading to false
            dispatch(fetchCollectionSuccess(collectionMap))

        }
        catch (e) {
            dispatch(fetchCollectionFailure(e.message))
        }
    }
}