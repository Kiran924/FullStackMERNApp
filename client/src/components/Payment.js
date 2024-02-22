import React,{Component} from "react";
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500} //by default US Dollar
                token={token => console.log(token)} //token is the token which we recieve from the stripe
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}

export default Payments;