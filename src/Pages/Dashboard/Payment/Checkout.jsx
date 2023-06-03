import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import "./Checkout.css";

const Checkout = ({ price, cart }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccessM, setPaymentSuccessM] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (price > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(err => console.log(err));
    }
  }, [price]);
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
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status == "succeeded") {
      setPaymentSuccessM(`Payment successfully tr ${paymentIntent.id}`);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        status: "service pending",
        date: new Date(),
        menuItems: cart.map(item => item.foodId),
        cartItems: cart.map(item => item._id),
        itemName: cart.map(item => item.name),
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => console.log(data));
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
      {paymentSuccessM && (
        <p className="font-bold text-green-600 py-3">{paymentSuccessM}</p>
      )}
      <button
        className="btn btn-primary payment-btn"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default Checkout;
