import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children, color }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? `${color ? "text-red-700" : "text-cs-primary"}` : ""
          } font-inter font-extrabold`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};
export default ActiveLink;
