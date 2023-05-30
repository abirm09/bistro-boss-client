import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { name, recipe, image, price, _id } = item;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user.email) {
      const orderInfo = { foodId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added to your cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please log in first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to log in",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-[384px h-[216px]">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-ghost"
            onClick={() => handleAddToCart(item)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
