import React from "react";

const Header = () => {
  return (
    <div className="navbar sticky  bg-base-100 backdrop-blur-sm bg-opacity-80 top-0 z-10 md:justify-around">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>My Portfolio</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Samuel</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>My Portfolio</a>
          </li>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
