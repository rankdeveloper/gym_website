import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className=" top-0 left-0 pointer-events-none "
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(0, 150, 255, 0.7)",
          position: "fixed",
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};

export default MouseEffect;
