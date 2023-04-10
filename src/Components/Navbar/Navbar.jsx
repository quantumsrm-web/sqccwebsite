import React from "react";
import navlogo from "./assets/navlogo.png";
const Navbar = () => {
  return (
    <div className="flex bg-[#0F0F0F] text-white p-2 justify-between border-b-4 border-green-300 mx-auto drop-shadow-title">
      <div>
        <img src={navlogo} alt="" className="mx-auto" />
      </div>
      <div>
        <ul className="flex items-center gap-20 mt-3 mr-8 text-xs md:text-base">
          <li className="hover:underline decoration-green-300  underline-offset-4">
            Home
          </li>
          <li className="hover:underline decoration-green-300 underline-offset-4">
            About Us
          </li>
          <li className="hover:underline decoration-green-300 underline-offset-4">
            Event
          </li>
          <li className="hover:underline decoration-green-300 underline-offset-4">
            Team
          </li>
          <li className="hover:underline decoration-green-300 underline-offset-4">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
