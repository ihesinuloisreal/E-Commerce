import StripeCheckout from 'react-stripe-checkout';
const Key = "pk_test_51MBl4bEAumVMvxDtb3OY0lOkEZ8hUUB5TZFxkY7uOMzTN0amfM6GGxkUzPMG2LfXwQ8x2ZZcGAq2pwGnXvWdecsE00G0PT8LB5";

const Pay = () => {
    const onToken = (token) =>{
        console.log(token);
    } 
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
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


        </div>
    )
}
export default Pay