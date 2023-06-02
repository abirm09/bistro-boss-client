import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import useAuth from "../../hooks/useAuth/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <h3>Loading...</h3>;
  }
  if (user && isAdmin?.admin) {
    return children;
  }
  logOut()
    .then()
    .catch(err => console.log(err));
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
