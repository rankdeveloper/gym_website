import { useEffect, useState } from "react";
import { Nav, NavMobile } from "./index";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  const [isActive, setIsAvtive] = useState(false);
  const [navMobile, setNavmobile] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsAvtive(true) : setIsAvtive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto 
    flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
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

      <Nav />

      <div className="hidden lg:flex  space-x-4">
        <button className="btn btn-sm  !bg-primary-200">Sign in</button>
      </div>

      {!navMobile ? (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavmobile(!navMobile)}
        >
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        </div>
      ) : (
        <div
          className="lg:hidden absolute right-4 cursor-pointer"
          onClick={() => setNavmobile(!navMobile)}
        >
          <RiCloseFill className="text-primary-200 text-3xl" />
        </div>
      )}

      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
