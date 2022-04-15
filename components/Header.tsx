import React, { useState } from "react";
import "../styles/Home.module.css";
import { IconContext } from "react-icons";
import hero from "../public/hero.svg";
import profile from "../public/mf-avatar.svg";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import Image from "next/image";
import Button from "./Button";
// import logo from "../public/mainLogoo.png";
function Header() {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(
    theme === "dark" ? true : false
  );
  const toggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="relative w-full ">
      <div className="top-0 left-0 fixed w-full h-2 bg-green-400"></div>
      <div className="flex justify-between items-center w-full  px-2 py-10">
        {/* <div
          onClick={() => {
            setDarkMode(!darkMode);
            toggler();
          }}
          className="w-11 rounded-full h-11 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3 dark:bg-slate-700"
        >
          <IconContext.Provider value={{ className: "w-9 h-9 p-1" }}>
            {!darkMode ? <RiSunFill /> : <RiMoonClearFill color="black" />}
          </IconContext.Provider>
        </div> */}
        <div className="w-12 h-12 relative flex justify-center items-center">
          {/* <Image alt="logo" src={logo} className="relative w-full h-full" /> */}
        </div>
        <div className="flex justify-center items-center  relative">
          <div className="relative flex p2 flex-row justify-center items-center mr-4">
            <p className="text-green-400 text-sm">I.&nbsp;</p>
            <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
              <p>About</p>
            </a>
          </div>
          <div className="relative flex p2 flex-row justify-center items-center mr-4">
            <p className="text-green-400 text-sm">II.&nbsp;</p>
            <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
              <p>Experience</p>
            </a>
          </div>
          <div className="relative flex p2 flex-row justify-center items-center mr-4">
            <p className="text-green-400 text-sm">III.&nbsp;</p>
            <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
              <p>Projects</p>
            </a>
          </div>
          <div className="relative flex p2 flex-row justify-center items-center mr-4">
            <p className="text-green-400 text-sm">IV.&nbsp;</p>
            <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
              <p>Contact</p>
            </a>
          </div>
          <div className="relative flex p2 flex-row justify-center items-center mr-4 ml-6">
            <Button
              href="https://docs.google.com/document/d/1qj0jUNRzkP_gAsl0NGUSsOGbrPUUwYSG3fzk3L0l4u0/edit?usp=sharing"
              text="Resume"
            />
          </div>
          {/* <button className="hover:text-white dark:hover:text-theme-100 hover:bg-theme-100 europa text-1xl dark:hover:bg-slate-700 dark:text-white cursor-pointer border-2 border-theme-100 dark:border-slate-700 px-7 py-3 rounded-full text-theme-100  ">
            Reach out
          </button> */}
        </div>
      </div>
      {/* <div className="relative w-full flex justify-center items-center flex-col mt-24">
        <div>
          <h1 className="eurostile text-center text-6xl capitalize tracking-wide">
            Software Engineer
          </h1>
        </div>
        <div className="pt-5">
          <h3 className="europa text-2xl text-center tracking-wide dark:text-theme-100 px-2">
            I design and code softwares best suited for your needs
          </h3>{" "}
        </div>
      </div> */}
      {/* <div className="relative flex justify-center items-center mt-16">
        <Image src={profile} alt="profile image" />
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image src={hero} alt="hero" />
      </div> */}
    </div>
  );
}

export default Header;
