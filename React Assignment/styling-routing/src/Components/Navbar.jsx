import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-800 p-7 text-white font-bold">
        <div>
          <img src="./vite.svg" alt="No Logo" />
        </div>
        <div className="flex justify-around items-center flex-col md:flex-row gap-6">
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/contect">CONTECT</Link>
          </div>
          <div>
            <Link to="/services">SERVICES</Link>
          </div>
        </div>
        <div>
          <input
            className="p-2 outline-none rounded-md  bg-transparent h-8 w-56 border border-white text-white placeholder-white focus:ring-2 focus:ring-blue"
            type="text"
            name="search"
            id="search"
            placeholder="Enter Search Item"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
