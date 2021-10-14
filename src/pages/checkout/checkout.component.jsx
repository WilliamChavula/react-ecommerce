import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'
import StripeButtonComponent from "../../components/stripe-button/stripe-button.component";

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
        <div className="total-price">TOTAL: ${totalPrice}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments* <br />
            CARD NO: 4242 4242 4242 4242 <br/>
            EXPIRY: 10/30 <br/>
            CVV: 123
        </div>
        <StripeButtonComponent price={totalPrice} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutComponent);