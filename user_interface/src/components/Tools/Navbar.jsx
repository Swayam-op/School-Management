import React from "react";
import { Link } from "react-router-dom";
import {SiDoubanread} from 'react-icons/si';
import {FiMenu} from 'react-icons/fi';
const Navbar = () => {
  return (
    <div>
      <div className="sm:hidden w-full py-4 px-6 flex items-center shadow-md shadow-gray-300 justify-between">
        <h1 className="text-xl font-semibold"><span>SC-MANG</span></h1>
        <FiMenu className="text-xl text-primary" />
      </div>
      <div className="hidden sm:flex items-center flex-wrap relative bg-white opacity-100  shadow-md sm:py-7 sm:px-10 ">
        <div className="px-4 flex items-center">
        <SiDoubanread className="text-2xl text-rose-800 mr-2" />
          <h1 className="text-2xl font-bold ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-stone-700">
              SC-MANG
            </span>{" "}
          </h1>
        </div>
        <div className="flex-grow flex ">
          <Link
            className="block group relative px-3 py-2.5 mx-2 text-sm  z-20 font-medium hover:text-blue-700 overflow-hidden "
            to="/"
          >
            Home{" "}
            <span className="bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-12 transition-transform duration-150 group-hover:translate-x-0 group-hover:visible "></span>
          </Link>
          <Link
            className="block  group relative px-3 py-2.5 mx-2 text-sm  z-20 font-medium hover:text-blue-700 overflow-hidden "
            to="/"
          >
            Events
            <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-12 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
          </Link>
          <Link
            className="block  group relative px-3 py-2.5 mx-2 text-sm  z-20 font-medium hover:text-blue-700 overflow-hidden "
            to="/"
          >
            Blogs{" "}
            <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-12 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
          </Link>
          <Link
            className="block  group relative px-3 py-2.5 mx-2 text-sm  z-20 font-medium hover:text-blue-700 overflow-hidden "
            to="/"
          >
            Contact us
            <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-16 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
          </Link>
          <Link
            className="block  group relative px-3 py-2.5 mx-2 text-sm  z-20 font-medium hover:text-blue-700  "
            to="/"
          >
            Management

            <div className="h-1 w-full  absolute bottom-0 right-0 overflow-hidden"><span className=" bg-blue-600 h-0.5 w-full invisible absolute bottom-0 right-0 -translate-x-12 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span></div>
            <div className="invisible group-hover:visible absolute top-10  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
    <ul className="py-1 text-xs text-gray-700 ">
      <li>
        <Link to='/register' className="block py-2 px-4 hover:bg-gray-100">Register</Link>
      </li>
      <li>
        <Link to='/databases' className="block py-2 px-4 hover:bg-gray-100">Database</Link>
      </li>
      <li>
        <Link to='/' className="block py-2 px-4 hover:bg-gray-100">Earnings</Link>
      </li>
      <li>
        <Link to='/' className="block py-2 px-4 hover:bg-gray-100 ">Sign out</Link>
      </li>
    </ul>
</div>
          </Link>
        </div>
        <div className="basis-1/12">
        <Link to="/signin">
          <button className="px-8 py-2 text-sm text-white font-medium shadow-md shadow-gray-400 rounded-sm bg-primary transition-colors duration-300 hover:bg-primary-text ">
            {" "}
            Signin{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
