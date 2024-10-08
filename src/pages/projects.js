import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import ProjectImage from "../../public/images/projects/zomato.jpg";
import ProjectImage1 from "../../public/images/projects/netflix.jpg";
import ProjectImage2 from "../../public/images/projects/agency-website-cover-image.jpg";
import ProjectImage3 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const Featured = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className=" w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className=" text-primary font-medium text-xl xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className=" my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className=" w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-bold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className=" w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className=" w-full h-auto lg:text-2xl" />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-bold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className=" w-10 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>RK | Projects Page</title>
        <meta name="description" content="any-description" />
      </Head>

      <TransitionEffect />

      <main className=" w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="featured col-span-12">
              <Featured
                title="Netflix Web"
                link="https://imdbmoviesearch.netlify.app/"
                summary="ARFLIX (Inspired from Netflix), based on HTML, CSS And JavaScript. By using TMDB Rest API to fetch the movies and web-series details and enhance user experience.Integration with the TMDB API to fetch movie details, including titles, descriptions, ratings, and images. Customizable categories or genres for browsing movies. Ability to play movie trailers directly from the website. Search functionality to find specific movies or TV shows"
                type="FeaturedProject"
                img={ProjectImage1}
                github="https://github.com/rajgupta2399/NETFLIX"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Food Ordering Web"
                link="https://swiggybyrk.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage}
                github="https://github.com/rajgupta2399/Zomato"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Digital Marketing Web"
                link="https://webgrowindia.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage2}
                github="https://github.com/rajgupta2399/WebgrowIndia"
              />
            </div>

            <div className="featured col-span-12">
              <Featured
                title="Hotel Booking"
                link="/"
                summary="Developed a responsive hotel booking application using React and Redux Toolkit , enhancing state management and application performance Implemented Firebase for user authentication, ensuring secure user login and registration processes. Utilized the REST Lite Travel APIfor data fetching, enabling real-time access to hotel listings, availability, and pricing information. Implemented a pre-booking feature that allows users to reserve hotel rooms in advance, enhancing user convenience and streamlining the booking process."
                type="FeaturedProject"
                img={ProjectImage3}
                github="/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Food Ordering Web"
                link="https://swiggybyrk.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage}
                github="https://github.com/rajgupta2399/Zomato"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Food Ordering Web"
                link="https://swiggybyrk.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage}
                github="https://github.com/rajgupta2399/Zomato"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
