import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Lilcon from "./Lilcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      ref={ref}
    >
      <Lilcon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-semibold text-2xl">{type}&nbsp; </h3>
        <span className=" capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className=" font-medium w-full">{info}</p>
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
    <div className=" my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className=" w-full flex flex-col items-center justify-between ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />

          <Details
          type="Bachelor Of Science In Computer Science"
          time="2016-2020"
          place="Massachusetts Institute Of Technology (MIT)"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
        />

        <Details
        type="Bachelor Of Science In Computer Science"
        time="2016-2020"
        place="Massachusetts Institute Of Technology (MIT)"
        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
      />
      
        </ul>
      </div>
    </div>
  );
};

export default Education;