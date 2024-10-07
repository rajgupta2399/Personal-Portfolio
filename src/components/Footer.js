import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-black font-medium text-lg sm:text-base">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className=" flex items-center lg:py-2">
            Made With
            <span className=" text-primary text-2xl px-1">&#9825;</span>
            by&nbsp;
            <Link href="/">RK</Link>
          </div>
          <Link href="/">Say Hello</Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
