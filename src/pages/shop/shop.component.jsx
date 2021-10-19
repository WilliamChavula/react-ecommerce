import React, { Component} from 'react';
import {Route} from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import {connect} from "react-redux";

import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionComponent from "../collection/collection.component";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";


class ShopComponent extends Component {

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollection } = this.props
        const db = getFirestore()
        const collectionRef = collection(db, 'collections')

        onSnapshot(collectionRef, async snapshot => {
           const collection =  convertCollectionsSnapshotToMap(snapshot)
            updateCollection(collection)
        })
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route component={CollectionsOverviewComponent} exact path={`${match.path}`}/>
                <Route component={CollectionComponent} path={`${match.path}/:collectionId`}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collection => dispatch(updateCollections(collection))
})


export default connect(null, mapDispatchToProps)(ShopComponent);