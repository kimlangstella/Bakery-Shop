import React from "react";
import { Typography } from "./typography";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="ml-24 mt-16 ">
      <div className="flex flex-row justify-around">
        <img src="/backery/download.png" alt="" className="" />
        <div className="">
          <Typography fontSize="title" className="pb-3 font-bold">
            About Us
          </Typography>
          <Typography>
            That's fantastic, Stella! Becoming <br />
            a businesswoman can be incredibly rewarding, <br />
            offering you the freedom to bring your ideas to life,
            <br />
            the potential to create a legacy, <br />
            and the chance to make a real impact in your community or even
            globally
          </Typography>
        </div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <img
        src="/backery/cake4.jpeg"
        width={254}
        height={249}
        alt=""
        className=" rounded-tr-[45px] absolute right-[322px] top-[2163px]"
      />
        </motion.div>
      
      <div>
        <Typography className="ml-32 mt-4 text-[#D95275] font-bold">
          COOKIE-head chef in stella shop
        </Typography>
        <img
          src="/backery/cake2.jpg"
          alt=""
          width={273}
          height={273}
          className=" border-2 object-cover border-gray-300 ml-80 mt-3"
        />
      </div>
    </div>
  );
};

export default AboutUs;
