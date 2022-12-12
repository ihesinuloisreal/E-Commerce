import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from "react";
import axios from "axios";
const Key = "pk_test_51MBl4bEAumVMvxDtb3OY0lOkEZ8hUUB5TZFxkY7uOMzTN0amfM6GGxkUzPMG2LfXwQ8x2ZZcGAq2pwGnXvWdecsE00G0PT8LB5";

const Pay = () => {
    const [stripeToken, setStripeTopken] = useState(null);
    const onToken = (token) =>{
        setStripeTopken(token);
    } ;

    useEffect(()=>{
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
        {stripeToken ? (<span>Processing. Please wait...</span>):( 
            <StripeCheckout 
                name="Shop" 
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description=" Your total is $20"
                amount={2000}
                token={onToken}
                stripeKey = {Key}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        )}


        </div>
    )
}
export default Pay