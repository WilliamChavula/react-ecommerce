import React from 'react';
import {connect} from "react-redux";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import {createStructuredSelector} from "reselect";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";
import {CollectionOverviewContainer} from "./collections-overview.styles";


const CollectionsOverviewComponent = ({ collections, history }) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) =>
                <CollectionPreviewComponent key={id} history={history} {...otherCollectionProps} />)
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverviewComponent);