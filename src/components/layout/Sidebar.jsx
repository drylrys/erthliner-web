import React from "react";
import Icon from "../Icon";

function Sidebar({ handleToggleNav, navToggle }) {
  return (
    <>
      <div
        className={`absolute w-3/4 h-[100vh] bg-white z-50 transition duration-500 ${
          navToggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="md:hidden p-5" onClick={handleToggleNav}>
          <Icon src="/assets/svg/logo.svg" className="w-10 h-w-10" alt="logo" />
          <Icon
            src="/assets/svg/hamburger-close.svg"
            alt="button"
            className=" cursor-pointer fill-white absolute top-5 right-5 w-6 h-w-6"
          />
        </div>

        <ul className="absolute  md:hidden m-2 flex flex-col top-20  gap-4 p-4">
          <li>
            <a className="text-sm text-black" href={"/"}>
              Home
            </a>
          </li>
          <li>
            <a className="text-sm text-black" href={"/about-us"}>
              About Us
            </a>
          </li>
          <li>
            <a className="text-sm text-black" href={"/services"}>
              Services
            </a>
          </li>
          <li>
            <a className="text-sm text-black" href={"/contact-us"}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      {navToggle && (
        <div
          className="absolute inset-0 bg-black/70 from-transparent to-black z-30"
          onClick={handleToggleNav}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
