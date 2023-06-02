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
import AdminHome from "../../Pages/Dashboard/AdminHome/AdminHome";
import AllUSers from "../../Pages/Dashboard/AllUsers/AllUSers";
import AddItem from "../../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItem from "../../Pages/Dashboard/ManageItem/ManageItem";

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
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "allusers",
        element: <AllUSers />,
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);
