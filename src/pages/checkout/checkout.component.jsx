import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'

const CheckoutComponent = ({ cartItems, totalPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />)
        }
        <div className="total-price">
            <span className="total">TOTAL: ${totalPrice}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutComponent);