import React from 'react';
import {connect} from "react-redux";

import './collections-overview.styles.scss'

import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import {createStructuredSelector} from "reselect";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";


const CollectionsOverviewComponent = ({ collections, history }) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) =>
                <CollectionPreviewComponent key={id} history={history} {...otherCollectionProps} />)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverviewComponent);