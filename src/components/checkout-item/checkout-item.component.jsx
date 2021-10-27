import React from 'react';
import {connect} from "react-redux";

import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

import {
    CartItemName,
    CartItemPrice,
    CartItemQuantity,
    CheckoutImage,
    ImageContainer,
    CheckoutItemContainer,
    RemoveItemButton
} from "./checkout-item.styles";

const CheckoutItemComponent = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutImage src={imageUrl} alt="product item"/>
            </ImageContainer>
            <CartItemName className="name">{name}</CartItemName>
            <CartItemQuantity>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </CartItemQuantity>
            <CartItemPrice>${price}</CartItemPrice>
            <RemoveItemButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);