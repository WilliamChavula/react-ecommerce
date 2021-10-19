import {UPDATE_COLLECTIONS} from "../actionTypes";

export const updateCollections = collectionMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionMap
})