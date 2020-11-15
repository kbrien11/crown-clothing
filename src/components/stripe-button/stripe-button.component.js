import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100
    const publishableKey = "pk_test_51HnpVCAZihD4njM83SukVe1I2jWVYtonxSI7Fh5EZoECo2nuiu25U3PDD56WEQcEOjz9ZYyGl6RA2LV6Vz3Qahwa005ZyI9vv2"

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }


    return (
        <StripeCheckout
        label = 'Pay Now'
        name = "CRWN Clothing Ltd"
        billingAddress
        bitcoin
        alipay
        description = {`Your total is $${price}`}
        amount = {PriceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        
        />
    )
}
export default StripeCheckoutButton