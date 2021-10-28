import React from 'react';
import { connect } from "react-redux";

import {collectionSelector} from "../../redux/shop/shop.selector";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

import { Title, CollectionPageContainer, ItemsContainer } from "./collection.styles";


const CollectionComponent = ({ collection }) => {
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <Title>{ title }</Title>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItemComponent key={item.id} item={item} /> )
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionComponent);