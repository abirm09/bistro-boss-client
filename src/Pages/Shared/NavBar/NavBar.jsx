import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/Activelink";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const navLink = (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/contact">Contact us</ActiveLink>
      <ActiveLink to="/menu">Our menu</ActiveLink>
      <ActiveLink to="/Order/soup">Our shop</ActiveLink>
    </>
  );
  return (
    <header className="bg-black bg-opacity-50 fixed w-full top-0 z-50">
      <div className="cs-container">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="font-cinzel flex flex-col p-2 active:scale-95 transition-all rounded-lg text-white"
            >
              <span className="font-black text-xl md:text-3xl">
                {" "}
                BISTRO BOSS
              </span>
              <span className="font-bold text-sm md:text-2xl">Restaurant</span>
            </Link>
          </div>
          <div className="block md:hidden">
            <button onClick={() => setMenu(!menu)} className="text-white">
              {menu ? (
                <HiXMark className="w-8 h-8 cursor-pointer" />
              ) : (
                <HiBars3BottomRight className="w-8 h-8 cursor-pointer" />
              )}
            </button>
            <div
              className={`${
                menu ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } transition-all fixed left-0 w-full top-[84px]`}
            >
              <ul className="bg-slate-800 text-white mx-5 shadow-md p-5 rounded-lg space-y-2 font-inter font-extrabold ">
                {navLink}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10 font-inter font-extrabold text-white">
              {navLink}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
