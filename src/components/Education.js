import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Lilcon from "./Lilcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
      ref={ref}
    >
      <Lilcon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-semibold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;{" "}
        </h3>
        <span className=" capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className=" font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className=" my-64 sm:my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className=" w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Computer Application"
            time="2023-2026"
            place="Lovely Professional University (LPU)"
            info="Learn about programming languages, database management, networking, web development, software engineering, data structures, and computer architecture."
          />

          <Details
            type="Central Board of Secondary Education (CBSE)"
            time="2021-2023"
            place="Government Boys Senior Secondary School (GBSS)"
            info="Involves studying business and trade activities, such as the exchange of goods and services between producers and consumers."
          />

          <Details
            type="Central Board of Secondary Education (CBSE)"
            time="2018-2020 | 73.5%"
            place="Jeevan Public Senior Secondary School (JPS)"
            info="To determine acceptance into the high school of your choice. Board exam results form an important part of your CV as they show your academic success and achievements."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
