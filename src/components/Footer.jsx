import React from "react";
import { footer } from "../data";
import { motion } from "framer-motion";

const Footer = () => {
  const { copyrightText, logo } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[175px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",

            repeatDelay: 0.5,
            stiffness: 40,
            type: "spring",
          }}
          className="text-primary-200 cursor-pointer font-bold"
        >
          Infinity <b className="!text-white">Fitness</b>
        </motion.span>

        <p className="text-neutral-300 text-sm">
          Designed and Developed by{" "}
          <a href="https://github.com/rankdeveloper" target="_blank">
            <span className="text-primary-200 cursor-pointer">Rankush</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
