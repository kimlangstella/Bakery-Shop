import React from "react";
import { Typography } from "./typography";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#D9D9D9] w-full h-[234px] mt-16">
      <div className="flex flex-row justify-around">
        <div>
          <img src="backery/logo.svg" alt="" />
        </div>
        <div>
          <Typography fontSize="heading2" className="mt-2">
            About Us
          </Typography>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <Typography>Follow Us</Typography>
          <div className="flex flex-row gap-2">
            <img src="/backery/facebook.svg" alt="" />
            <img src="/backery/instagram.svg" alt="" />
            <img src="/backery/twitter.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-pink-600 mt-16 flex flex-row justify-around">
        <div>
          <Typography>© 2024 Clesetnow. All rights reserved.</Typography>
        </div>
        <div>
          <Typography>Term and Services</Typography>
        </div>
        <div>
          <button onClick={handleBackToTop}>Back on Top</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
