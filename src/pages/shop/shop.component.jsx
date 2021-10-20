import React, { Component} from 'react';
import {Route} from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import {connect} from "react-redux";

import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionComponent from "../collection/collection.component";
import WithSpinnerComponent from "../../components/withSpinner/with-spinner.component";

import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinnerComponent(CollectionsOverviewComponent)
const CollectionComponentWithSpinner = WithSpinnerComponent(CollectionComponent)

class ShopComponent extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollection } = this.props
        const db = getFirestore()
        const collectionRef = collection(db, 'collections')

        onSnapshot(collectionRef, async snapshot => {
           const collection =  convertCollectionsSnapshotToMap(snapshot)
            updateCollection(collection)
            this.setState({ loading: false })
        })
    }

    render() {
        const {match} = this.props;
        const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={
                    props => <CollectionOverviewWithSpinner isLoading={loading} { ...props} />
                } />
                <Route path={`${match.path}/:collectionId`} render={
                    props => <CollectionComponentWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collection => dispatch(updateCollections(collection))
})


export default connect(null, mapDispatchToProps)(ShopComponent);