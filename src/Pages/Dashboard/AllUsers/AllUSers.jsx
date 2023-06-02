import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaUserAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUSers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return res.json();
  });
  console.log(users);
  const handleMakeAdmin = (user, role) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        if (data.matchedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro boss | ManageUser</title>
      </Helmet>
      <SectionTitle subHeading="Hurry Up" title="Manage all users" />
      <div className="bg-slate-50 p-5">
        <h2 className="font-raleway text-2xl">Total users : {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <>
                        <button
                          className="btn btn-ghost"
                          onClick={() => handleMakeAdmin(user, "user")}
                        >
                          <span>Admin</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-ghost"
                          onClick={() => handleMakeAdmin(user, "admin")}
                        >
                          <FaUserAlt className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-error text-white">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUSers;
