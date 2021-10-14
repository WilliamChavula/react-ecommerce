import React from 'react';
import { connect } from "react-redux";

import {collectionSelector} from "../../redux/shop/shop.selector";

import './collection.styles.scss'
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

const CollectionComponent = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2 className='title'>{ title }</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItemComponent key={item.id} item={item} /> )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionComponent);