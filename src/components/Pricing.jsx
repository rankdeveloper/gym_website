import React from "react";
import { pricing } from "../data";
import { PlanList } from "./index";
import { motion } from "framer-motion";

const Pricing = () => {
  const { icon, plans, title } = pricing;
  return (
    <section className="section">
      <motion.div
        whileHover={{ scale: 1.3 }}
        duration={0.5}
        className="section-title-group max-h-[540px] mx-auto px-4 lg:px-0 "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
      >
        <motion.img
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
          src={icon}
          alt="pricing icon"
        />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </motion.div>
      <div>
        <PlanList plans={plans} />
      </div>
    </section>
  );
};

export default Pricing;
