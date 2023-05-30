import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Layouts/Dashboard";
import UserHome from "../../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../../Pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/userhome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
    ],
  },
]);
