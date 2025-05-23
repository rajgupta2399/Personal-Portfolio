import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Lilcon from "./Lilcon";
import Link from "next/link";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  link,
}) => {
  const ref = useRef();
  return (
    <li
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      ref={ref}
    >
      <Lilcon refrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-semibold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm">{work}</p>
        <a href={link} target="_blank" className=" text-red-600">
          Live Link : {link}
        </a>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className=" w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Abroll Consulting and Technology LLP (TruAct)"
            companyLink="https://www.truact.in/contact-us"
            time="2025-Present"
            address="New Delhi"
            work="I'm a Frontend Developer with hands-on experience in building user-friendly and responsive web interfaces using HTML, CSS, JavaScript, and React. I also work with various CSS frameworks and UI libraries to streamline design and development. Additionally, I contribute to projects involving Zoho Creator, where I help build and enhance custom applications. I enjoy turning complex problems into clean, efficient code and delivering smooth user experiences."
            link="https://www.truact.in"
          />

          <Details
            position="Freelance Work"
            company="Freelancing"
            companyLink="rkexpress.co"
            time="2024-2025"
            address="New Delhi"
            work="A professional website for a waterproofing company, built with Next.js and React.js to showcase their services and enable user interaction. The platform includes a contact system powered by NodeMailer for efficient communication."
            link="https://srmconstruction.in/"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
