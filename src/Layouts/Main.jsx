import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const isLoAccount =
    location?.pathname?.includes("/login") ||
    location?.pathname?.includes("/register");
  return (
    <>
      {isLoAccount || <NavBar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
