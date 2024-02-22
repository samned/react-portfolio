import React from "react";
import Image from 'next/image';
import SvgIcon from "../../../public/img/undraw_programming_re_kg9v.svg";

const Hero = () => {
  return (
    <section className="h-[100vh] backdrop-opacity-70 pt-4">
      <div className="py-8 mx-12 max-w-screen-xl lg:py-16 lg:px-12 text-left flex">
        <div>
          <h1 className="mb-4 text-3xl  font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            I'm Samuel Abebayehu
          </h1>
          <h1 className="font-mono">Full Stack Dev_</h1>
        </div>
        <div>
          <Image priority src={SvgIcon} alt="Follow us on Twitter" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
