import React from 'react';

import CustomButton from '../custom-buttom/custom-button.component'

import './cart-dropdown.styles.scss'


const CartDropdownComponent = (props) => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdownComponent;