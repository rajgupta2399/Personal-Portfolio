import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className=" capitalize font-semibold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className=" font-medium w-full">{work}</p>
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
    <div className=" my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className=" w-full flex flex-col items-center justify-between ml-4">
          <Details
            position="Software Engineer"
            company="@Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />

          <Details
            position="Intern"
            company="@Facebook"
            companyLink="www.google.com"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing new features for Google's 
        search engine, including improving the accuracy and relevance of search results and 
        developing new tools for data analysis and visualization."
          />

          <Details
            position="Software Developer"
            company="@Amazon"
            companyLink="www.google.com"
            time="2020-2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
          />

          <Details
            position="Teaching Assistant"
            company="@MIT"
            companyLink="www.google.com"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA"
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments,and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
