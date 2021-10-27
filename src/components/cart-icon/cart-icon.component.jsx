import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {selectCartItemsCounter} from "../../redux/cart/cart.selectors";

import {CartIconContainer, CartIcon, CartItemCount} from "./cart-icon.styles";


const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <CartIcon />
        <CartItemCount>{ itemCount }</CartItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCounter
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);