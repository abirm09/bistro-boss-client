import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/useCart/useCart";
const Cart = () => {
  const [cart] = useCart();
  return (
    <button className="btn gap-2 btn-ghost">
      <AiOutlineShoppingCart className="w-6 h-6" />
      <div className="badge badge-secondary">{cart?.length || 0}</div>
    </button>
  );
};

export default Cart;
