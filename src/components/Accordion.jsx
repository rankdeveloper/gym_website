import React, { useState } from "react";

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="bg-white border rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 50,
              damping: 10,
            }}
            className="mt-6"
          >
            {answer}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
