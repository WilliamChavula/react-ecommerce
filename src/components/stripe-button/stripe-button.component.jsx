import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButtonComponent = ({ price }) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_TKDXpoLJqDOPQlrPGz7eQ9Fm00KNW0VF1I'

    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React Ecommerce'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is$ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButtonComponent;