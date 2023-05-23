import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-cs-primary" : "")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ActiveLink;
