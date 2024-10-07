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
import ProjectImage3 from "../../public/images/projects/HBA.png";

const Featured = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
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

      <div className=" w-full flex flex-col items-start justify-between pl-6">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className=" my-2 font-medium text-dark">{summary}</p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className=" w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-bold"
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
    <article className=" w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className=" w-full h-auto" />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl">{type}</span>
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
            className="text-lg font-bold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className=" w-10">
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

      <main className=" w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="featured col-span-12">
              <Featured
                title="Netflix Web"
                link="https://imdbmoviesearch.netlify.app/"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                type="FeaturedProject"
                img={ProjectImage1}
                github="https://github.com/rajgupta2399/NETFLIX"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Food Ordering Web"
                link="https://swiggybyrk.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage}
                github="https://github.com/rajgupta2399/Zomato"
              />
            </div>
            <div className="col-span-6">
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
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                type="FeaturedProject"
                img={ProjectImage3}
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Food Ordering Web"
                link="https://swiggybyrk.netlify.app/"
                type="FeaturedProject"
                img={ProjectImage}
                github="https://github.com/rajgupta2399/Zomato"
              />
            </div>
            <div className="col-span-6">
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
