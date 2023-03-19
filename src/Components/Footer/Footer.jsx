import React from "react";
import footerlogo from "./assets/footer logo.png";
const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] h-1/2 p-4 text-white flex" >
      <div>
        <img src={footerlogo} alt="" className="h-36" />
      </div>


      <div>

      </div>


      <div>
        <ul className="flex flex-col">
            <li>Explore</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Team</li>
            <li>Events</li>
        </ul>
      </div>


      <div>
        <ul className="flex flex-col">
            <li>Contact us</li>
            <li>Email 1</li>
            <li>Email 2</li>
            <li>Number 1</li>
            <li>Number 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
