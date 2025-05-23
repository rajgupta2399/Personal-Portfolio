import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
// import Profile from "../../public/images/profile/prof.png"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInReview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInReview) {
      motionValue.set(value);
    }
  }, [isInReview, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value, motionValue]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>RK | About Page</title>
        <meta name="description" content="any-description" />
      </Head>
      <TransitionEffect />
      <main className=" flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className=" col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Raj Kumar, a Frontend web developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences.I am always looking for new and innovative ways to
                bring my clients&apos; visions to life.
              </p>
              <p className="font-medium my-4">
                As front-end developer with a strong passion for creating
                intuitive user experiences and pixel-perfect designs. With
                expertise in React.js and a focus on seamless user interactions,
                they thrive in collaborative environments where they can
                transform concepts into engaging web applications.
              </p>

              <p className="font-medium">
                In addition to their front-end skills, they are expanding their
                knowledge in backend development, currently learning Node.js,
                Express, and MongoDB, aiming to deliver complete, high-quality,
                and responsive solutions that exceed client expectations.
              </p>
            </div>

            <div className=" col-span-3 relative h-max rounded-2xl border-2 border-dark border-solid bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePic}
                alt="ProfileImage"
                className=" w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project Completed
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
