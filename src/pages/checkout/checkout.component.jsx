import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component'
import StripeButtonComponent from "../../components/stripe-button/stripe-button.component";

import { CardText, CheckoutItem, CheckoutPageContainer, HeaderContainer, HeaderItem } from "./checkout.styles";


const CheckoutComponent = ({ cartItems, totalPrice }) => (
    <CheckoutPageContainer>
        <HeaderContainer>
            <HeaderItem>
                <span>Product</span>
            </HeaderItem>
            <HeaderItem>
                <span>Description</span>
            </HeaderItem>
            <HeaderItem>
                <span>Quantity</span>
            </HeaderItem>
            <HeaderItem>
                <span>Price</span>
            </HeaderItem>
            <HeaderItem>
                <span>Remove</span>
            </HeaderItem>
        </HeaderContainer>
        {
            cartItems.map(cartItem => <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />)
        }
        <CheckoutItem>TOTAL: ${totalPrice}</CheckoutItem>
        <CardText>
            *Please use the following test credit card for payments* <br />
            CARD NO: 4242 4242 4242 4242 <br/>
            EXPIRY: 10/30 <br/>
            CVV: 123
        </CardText>
        <StripeButtonComponent price={totalPrice} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutComponent);