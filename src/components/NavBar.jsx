import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { navLinks } from "../constants";
import resume from "../assets/Mahinay, Reyniel T.pdf";
import Reveal from "./Reveal";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="absolute z-10  ">
      <IconContext.Provider value="navbar-color">
        <div className="">
          <div className="nav-bar fixed max-sm:justify-end max-sm:pr-5">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>

          <a
            href={resume}
            target="_blank "
            className="max-sm:block hidden max-sm:relative max-sm:left-5 max-sm:top-7"
          >
            <p
              className=" font-montserrat bg-black-gray
             tracking-tight text-semi-white text-xl font-black px-5 "
            >
              RESUME
            </p>
          </a>
        </div>

        <nav className={`${sidebar ? "nav-menu active " : "nav-menu"}`}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose />
            </li>
            {navLinks.map((item, index) => {
              return (
                <li key={index} className="py-5">
                  <a
                    href={item.href}
                    className="text-semi-white font-montserrat font-lighter text-4xl"
                  >
                    <Reveal>{item.label}</Reveal>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
};

export default NavBar;
