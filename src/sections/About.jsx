import React from "react";
import profile from "../assets/images/profile.jpg";
import Reveal from "../components/Reveal";
import { AboutBackground } from "../components";

const about = () => {
  return (
    <div
      className="max-container z-9 w-full xl:min-h-screen overflow-hidden flex flex-1 flex-row max-sm:flex-col  "
      id="about"
    >
      <AboutBackground /* Line and dot background */ className="hidden " />
      <div
        className="flex w-full flex-col  items-end max-sm:items-start 
      max-sm:h-[330px] pt-3 max-sm:pt-9 "
      >
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative top-[20px] left-4" />
        <Reveal>
          <h3
            className="font-montserrat tracking-tight	 font-black xl:text-3xl
           max-sm:text-xl pr-6 max-sm:pl-10 text-black-gray relative"
          >
            ABOUT
          </h3>
        </Reveal>
        <div
          className="relative left-[150px] max-sm:left-0 top-10 max-sm:top-[20px] md:pr-[45px]
         max-md:pr-[90px] max-sm:pl-7 flex justify-center "
        >
          <Reveal>
            <img
              src={profile}
              alt="profile"
              className="w-[70%] hadow-2xl shadow-black-500/50 max-sm:w-[60%] max-sm:h-[50%]  max-sm:ml-3 
               place-self-center 
            "
            />
          </Reveal>
        </div>
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative -top-[110px] left-4" />
      </div>
      <div className="w-full pt-[85px] max-sm:pt-[0px]    pl-[45px] max-sm:pl-[25px] max-sm:pr-[0px]">
        <Reveal>
          <p
            className="font-normal tracking-tight	  max-sm:ml-3 max-sm:w-[300px]
        max-sm:h-full text-xl md:text-[18px] max-md:text-[16px] max-sm:text-base text-black-gray prose flex flex-wrap
        "
          >
            Based in Hagonoy, Bulacan The Philippines. I am a Graduate
            <br className="max-sm:hidden" /> of Bachelor of Science in
            Information Technology, <br className="max-sm:hidden" /> Where our
            capstoneproject was chosen as the best capstone.
            <br className="max-sm:hidden" />
            It was a 2D RPG game, created using Unity with C#
            <br className="max-sm:hidden" />
            and I am one of the developers. But my real goal was to
            <br className="max-sm:hidden" /> be a Front-end Developer with a
            passion for developing clean, <br className="max-sm:hidden" />
            attractive, and responsive websites.
          </p>
        </Reveal>
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative -top-[110px] -left-[9px]" />

        <Reveal>
          <h3
            className="font-montserrat tracking-tight xl:pt-[155px] md:pt-[80px] max-md:pt-[40px]	 max-sm:pt-5
        font-black xl:text-3xl md:text-1xl max-sm:text-xl text-black-gray relative max-sm:pl-3"
          >
            TECH
          </h3>
        </Reveal>
        <div className="w-3 h-3 bg-black rounded-full max-sm:block hidden relative -top-[20px] -left-[9px]" />

        <Reveal>
          <p
            className="font-montserrat font-semibold xl:text-4xl md:text-2xl max-md:text-xl max-sm:text-lg 
          max-sm:pl-3 text-semi-white pt-3 xl:leading-[50px] "
          >
            <span className="bg-black-gray">HTML</span>{" "}
            <span className="bg-black-gray">CSS</span>{" "}
            <span className="bg-black-gray">JAVASCRIPT</span>{" "}
            <span className="bg-black-gray">C#</span> <br />
            <span className="bg-black-gray">REACT</span>{" "}
            <span className="bg-black-gray">TAILWIND</span>{" "}
            <span className="bg-black-gray">GIT</span>
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default about;
