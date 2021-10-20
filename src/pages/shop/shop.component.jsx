import React, { Component} from 'react';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionComponent from "../collection/collection.component";
import WithSpinnerComponent from "../../components/withSpinner/with-spinner.component";

import {fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinnerComponent(CollectionsOverviewComponent)
const CollectionComponentWithSpinner = WithSpinnerComponent(CollectionComponent)

class ShopComponent extends Component {

    componentDidMount() {
        const { fetchCollectionIsFetching } = this.props
        fetchCollectionIsFetching()
    }

    render() {
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={
                    props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} { ...props} />
                } />
                <Route path={`${match.path}/:collectionId`} render={
                    props => <CollectionComponentWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionIsFetching: () => dispatch(fetchCollectionStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);