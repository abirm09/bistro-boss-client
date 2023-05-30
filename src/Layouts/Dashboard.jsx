import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaMoneyCheck,
} from "react-icons/fa";
import ActiveLink from "../components/ActiveLink/Activelink";
import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useCart from "../hooks/useCart/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  return (
    <section className="cs-container">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden w-fit"
          >
            <FaBars />
          </label>
          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="items-start ">
              <Link
                to="/"
                className="font-cinzel flex flex-col p-2 active:scale-95 transition-all rounded-lg text-black items-start"
              >
                <span className="font-black text-xl md:text-3xl">
                  {" "}
                  BISTRO BOSS
                </span>
                <span className="font-bold text-sm md:text-2xl">
                  Restaurant
                </span>
              </Link>
            </li>
            <ActiveLink color={true} to="/dashboard/userhome">
              <FaHome /> User Home
            </ActiveLink>
            <ActiveLink color={true} to="/dashboard/reservation">
              <FaCalendarAlt /> Reservation
            </ActiveLink>
            <ActiveLink color={true} to="/dashboard/paymenthistory">
              <FaMoneyCheck /> Payment History
            </ActiveLink>
            <ActiveLink color={true} to="/dashboard/mycart">
              <FaShoppingCart /> My Cart{" "}
              <span className="badge badge-info">{cart?.length || 0}</span>
            </ActiveLink>
            <div className="divider"></div>
            <ActiveLink color={true} to="/dashboard/userhome">
              <FaHome /> User Home
            </ActiveLink>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
