import ActiveLink from "../../../components/ActiveLink/Activelink";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
const DashBoard = () => {
  const [isAdmin] = useAdmin();
  return (
    <ActiveLink
      to={isAdmin?.admin ? "/dashboard/adminhome" : "/dashboard/userHome"}
    >
      Dashboard
    </ActiveLink>
  );
};

export default DashBoard;
