import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu/useMenu";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
const ManageItem = () => {
  const [menu, , refetch] = useMenu();
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
        fetch(`http://localhost:5000/menu/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <SectionTitle title="Manage items" subHeading="Hurry Up" />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item image</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} className="w-[75px]" alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>
                  <button className="btn btn-info">
                    <FaRegEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error"
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
  );
};

export default ManageItem;
