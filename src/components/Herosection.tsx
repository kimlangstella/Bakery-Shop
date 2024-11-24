import React from "react";
import { Typography } from "./typography";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="relative mt-9">
      <div className="relative">
        <img src="/backery/Cupcake.png" alt="Cupcake" />
      </div>

      <motion.div
        className="absolute left-[218px] top-[92px] space-y-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Typography fontSize="title" className="space-x-1 text-[32px]">
            Welcome to Cookie{" "}
            <span className="text-[#D95275] font-bold">DESSERT</span>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <Typography fontSize="title" className="">
            – Where Sweet Dreams Come True!
          </Typography>
        </motion.div>
      </motion.div>
      <div className="absolute left-[218px] top-[215px] p-2">
        <Typography className="text-base border-t-2 border-b-2 border-pink-300 pt-2 pb-2">
          We are passionate about crafting the most delicious and beautifully
          designed cakes. <br />
          Whether you're celebrating a birthday, wedding, or any special
          occasion, <br />
          we bring your vision to life with our expertly baked treats.
        </Typography>
      </div>
      <div className="absolute left-[218px] top-[325px] mt-2 p-2">
        <button className="bg-[#D95252] p-3 w-[116px] rounded-lg text-white">
          Explore Now{" "}
        </button>
      </div>
    </div>
  );
};

export default Herosection;
