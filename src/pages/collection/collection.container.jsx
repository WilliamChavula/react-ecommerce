import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionComponent from "./collection.component";
import WithSpinnerComponent from "../../components/withSpinner/with-spinner.component";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinnerComponent
)(CollectionComponent)


export default CollectionContainer