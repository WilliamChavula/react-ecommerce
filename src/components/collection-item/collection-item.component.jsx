import React from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions'

import { Image, CollectionItemContainer, CollectionButton, CollectionItemPrice, CollectionItemName, Footer } from "./collection-item.styles";


const CollectionItemComponent = ({ item, addItem }) => {
    const { name, price, imageUrl } = item

    return (
        <CollectionItemContainer>
            <Image backgroundImage={imageUrl}/>
            <Footer>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>${price}</CollectionItemPrice>
            </Footer>
            <CollectionButton inverted onClick={ () => addItem(item) }>
                ADD TO CART
            </CollectionButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItemComponent);