import React from "react";
import { BackgroundParticles, HeroBackground } from "../components";
import Reveal from "../components/Reveal";
import resume from "../assets/Mahinay, Reyniel T.pdf";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className=" relative max-container w-full xl:min-h-screen flex flex-row
       max-sm:flex-col flex-1 justify-center items-start pt-[110px] max-sm:pt-[0] max-sm:pl-3"
      id="home"
    >
      <HeroBackground /* line and dot background*/ />
      <div className="block max-sm:hidden">
        <BackgroundParticles />
      </div>
      <div className=" w-full pr-8 max-sm:pr-0 relative flex flex-col items-end max-sm:items-start">
        <h1
          className="font-montserrat tracking-tight	 xl:text-9xl md:text-[110px] max-md:text-[90px] max-sm:text-7xl  
        font-black flex flex-1  max-sm:justify-start max-sm:pl-5 max-sm:pt-[90px] text-black-gray"
        >
          HELLO
        </h1>
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative -top-10 left-1" />

        <a href={resume} target="_blank " className="max-sm:hidden block">
          <div className=" bg-black-gray group text-semi-white  mt-[165px] hover:text-black-gray hover:bg-transparent">
            <p
              className="element font-montserrat  group-hover:translate-x-5 transition-transform duration-300 ease-in-out
             tracking-tight text-4xl md:text-3xl max-md:text-1xl font-black px-5 "
            >
              RESUME
            </p>
          </div>
        </a>
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-10 left-1" />
      </div>
      <div className="w-full pl-8 pt-[115px] max-sm:pt-[0px] max-sm:pl-6  relative">
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[113px] -left-5" />
        <h3
          className="font-montserrat tracking-tight	 font-extrabold xl:text-6xl md:text-5xl max-sm:text-3xl
        max-md:text-[50px]  text-black-gray "
        >
          I'M REYNIEL <br /> MAHINAY
        </h3>
        <p
          className="font-extrabold tracking-tight	 xl:text-4xl md:text-2xl max-md:text-[30px] selection:max-sm:text-xl 
        xl:pt-[185px] md:pt-[120px] max-md:pt-[90px] md:pb-[65px] max-sm:pt-5 text-black-gray "
        >
          FRONT-END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default Hero;
