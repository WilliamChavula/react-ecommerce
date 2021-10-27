import React from 'react';

import './cart-item.styles.scss'
import { CartItemContainer, CartItemImage, CartItemName, CartItemPrice, CartDetails } from "./cart-item.styles";


const CartItemComponent = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="cart-item"/>
        <CartDetails>
            <CartItemName>{name}</CartItemName>
            <CartItemPrice>{quantity} x ${price}</CartItemPrice>
        </CartDetails>
    </CartItemContainer>
);

export default CartItemComponent;