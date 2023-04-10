import React from "react";
import navlogo from "./assets/navlogo.png";
const Navbar = () => {
  return (
    <div className="flex bg-[#0F0F0F] text-white p-2 justify-between ">
      <div>
        <img src={navlogo} alt="" className="" />
      </div>
      <div>
        <ul className="flex items-center gap-20 mt-3 mr-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Event</li>
          <li>Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
