import React from 'react';
import {connect} from "react-redux";


import {selectCartItems} from "../../redux/cart/cart.selectors";


import CustomButton from '../custom-buttom/custom-button.component'
import CartItemComponent from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'


const CartDropdownComponent = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdownComponent);