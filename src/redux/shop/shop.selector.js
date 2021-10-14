import {createSelector} from "reselect";

const shopSelector = state => state.shop

export const shopCollectionSelector = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const collectionSelector = collectionId => createSelector(
    [shopCollectionSelector],
    collections => collections[collectionId]
)

export const selectCollectionsForPreview = createSelector(
    [shopCollectionSelector],
    collections => Object.keys(collections).map(key => collections[key])
)