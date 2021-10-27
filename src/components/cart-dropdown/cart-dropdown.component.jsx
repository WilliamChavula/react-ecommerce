import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";


import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


import CustomButton from '../custom-buttom/custom-button.component'
import CartItemComponent from '../cart-item/cart-item.component'

import { CartContainer, CartItem, MessageText } from "./cart-dropdown.styles";


const CartDropdownComponent = ({ cartItems, history, dispatch }) => (
    <CartContainer>
        <CartItem className="cart-items">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item={cartItem} />)
                    ) : (
                        <MessageText className="empty-message"> Your cart is empty</MessageText>
                )
            }
        </CartItem>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }} >GO TO CHECKOUT</CustomButton>
    </CartContainer>
);

const mapStateToProps =createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdownComponent));