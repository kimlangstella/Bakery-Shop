import React from "react";
import { Typography } from "./typography";

const Navbar = () => {
  return (
    <div className="ml-[218px] w-[944px] h-[71px]">
      <nav className="flex flex-row justify-between items-center">
        <div className="">
          <img src="/backery/logo.svg" alt="" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <ul className="flex flex-row  w-full">
            <li className="p-14">
              <a href=""><Typography className="text-[15px] font-semibold">Category</Typography></a>
            </li>
            <li className="p-14">
              <a href=""><Typography className="text-[15px] font-semibold">About Us</Typography></a>
            </li>
            <li className="p-14">
              <a href=""><Typography className="text-[15px] font-semibold">Contact Us</Typography></a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
  <button className="p-3 w-[146px]  bg-[#D95275] text-white rounded-[32px] hover:bg-[#b43e3e] transition duration-300">
    Order Cake
  </button>
</div>

      </nav>
    </div>
  );
};

export default Navbar;

