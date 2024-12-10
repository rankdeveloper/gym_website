import React from "react";
import { workouts } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";
import { Navigation } from "swiper";
import { motion } from "framer-motion";

const WorkoutSlider = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            key={index}
            className={`${
              index % 2 === 0
                ? "max-w-[340px] max-h-[340px]"
                : "max-w-[300px] max-h-[300px] mt-[20px]"
            } relative cursor-pointer transition-opacity hover:opacity-90 hover:scale-110`}
          >
            <motion.img
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
              src={image}
              alt="image slider"
              className="w-full h-full object-cover "
            />
            <div className="absolute left-[20px] bottom-[20px] hover:bg-primary-200 border border-primary-200 h-[26px] px-[14px] flex items-center rounded-[1px]">
              <div className="font-primary font-semibold text-sm text-neutral-400  hover:text-white">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
