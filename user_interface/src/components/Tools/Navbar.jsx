import React from "react";
import { Link } from "react-router-dom";
import {SiDoubanread} from 'react-icons/si';
const Navbar = () => {
  return (
    <div>
      <div className=" flex items-center flex-wrap relative bg-white opacity-100  shadow-md sm:py-7 sm:px-10 ">
        <div className="px-4 flex items-center">
        <SiDoubanread className="text-2xl text-amber-800 mr-2" />
          <h1 className="text-2xl font-bold ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700">
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
          <button className="px-8 py-2 shadow-sm text-sm text-white font-medium rounded-sm bg-gradient-to-r from-amber-700 to-stone-700 hover:to-stone-800 hover:from-stone-700">
            {" "}
            <Link to="/">Signin</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
