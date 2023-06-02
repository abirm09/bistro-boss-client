import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const [cart] = useCart();
  const total = parseFloat(
    cart.reduce((sum, element) => sum + element.price, 0).toFixed(2)
  );
  return (
    <div>
      <SectionTitle subHeading="Please process" title="Payment" />
      <div>
        <Elements stripe={stripePromise}>
          <Checkout price={total} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
