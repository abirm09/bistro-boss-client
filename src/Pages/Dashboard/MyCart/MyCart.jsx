import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart/useCart";
import { MdPayment } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = parseFloat(
    cart.reduce((total, element) => total + element.price, 0).toFixed(2)
  );
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            refetch();
            console.log(data);
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro boss | My cart</title>
      </Helmet>
      <SectionTitle subHeading="My Cart" title="Wanna add more" />
      <div className="bg-slate-50 p-4">
        <div>
          <div className="flex flex-wrap font-raleway justify-between items-center font-semibold">
            <h2>Total orders : {cart?.length}</h2>
            <h2>
              Total Price : <span className="text-red-600">$ {totalPrice}</span>
            </h2>
            <Link to="/dashboard/payment">
              <button className="btn btn-ghost">
                <MdPayment /> <span className="ml-2">Pay now</span>
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full font-raleway font-semibold">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Item name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, index) => (
                  <tr key={cartItem._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={cartItem.image}
                        alt={cartItem.name}
                        className="w-[75px] h-[75px]"
                      />
                    </td>
                    <td>{cartItem.name}</td>
                    <td>$ {cartItem.price}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleDelete(cartItem._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
