import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const Checkout = ({ price }) => {
  console.log(price);
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="font-bold text-red-600 py-3">{cardError}</p>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Checkout;
