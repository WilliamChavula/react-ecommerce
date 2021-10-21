import {connect} from "react-redux";
import { compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinnerComponent from "../withSpinner/with-spinner.component";

import CollectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const ContainerOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinnerComponent
)(CollectionsOverviewComponent)

// const ContainerOverviewContainer = connect(mapStateToProps)(WithSpinnerComponent(CollectionsOverviewComponent))

export default ContainerOverviewContainer;