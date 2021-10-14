import React from 'react';
import {Route} from "react-router-dom";

import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionComponent from "../collection/collection.component";

const ShopComponent = ({ match }) => {
        return (
            <div className='shop-page'>
                <Route component={CollectionsOverviewComponent} exact path={`${match.path}`} />
                <Route component={CollectionComponent} path={`${match.path}/:collectionId`} />
            </div>
        );
}

export default ShopComponent;