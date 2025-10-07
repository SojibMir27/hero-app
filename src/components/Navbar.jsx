import { Github } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto navbar bg-base-100 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <a className="font-bold text-lg md:text-2xl text-[#9f62f2] flex">
            <img className="w-8 h-8" src="logo.png" alt="" /> HERO.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Apps</a>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white font-semibold">
          <Github className="invert" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
