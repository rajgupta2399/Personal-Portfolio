import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
        <Layout className="py-8 flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className=" flex items-center">
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
