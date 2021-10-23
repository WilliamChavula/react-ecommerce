import React, { Component} from 'react';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import ContainerOverviewContainer from "../../components/collections-overview/container-overview.container";
import CollectionContainer from "../collection/collection.container";

import {fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopComponent extends Component {

    componentDidMount() {
        const { fetchCollectionIsFetching } = this.props
        fetchCollectionIsFetching()
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ContainerOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionIsFetching: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopComponent);