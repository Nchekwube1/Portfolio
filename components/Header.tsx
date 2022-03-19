import React, { useState } from "react";
import '../styles/Home.module.css'
import { IconContext } from "react-icons";
import hero from "../public/hero.svg";
import profile from "../public/mf-avatar.svg";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import Image from "next/image";

function Header() {

  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(
    theme === "dark" ? true : false
  );
  const toggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center w-full  px-10 py-10">
        <div
          onClick={() => {
            setDarkMode(!darkMode);
            toggler();
          }}
          className="w-14 rounded-full h-14 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3 dark:bg-slate-700"
        >
          <IconContext.Provider value={{ className: "w-11 h-11 p-1" }}>
            {!darkMode ? <RiSunFill /> : <RiMoonClearFill color="black" />}
          </IconContext.Provider>
        </div>
        <div>logo here</div>
        <div className="md:mr-24 mr-12  relative">
          <button className="hover:text-white dark:hover:text-blue-100 hover:bg-blue-100 europa text-1xl dark:hover:bg-slate-700 dark:text-white cursor-pointer border-2 border-blue-100 dark:border-slate-700 px-7 py-3 rounded-full text-blue-100  ">
            Reach out
          </button>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center flex-col mt-24">
        <div>
          <h1 className="eurostile text-center text-6xl capitalize tracking-wide">
            Software Engineer
          </h1>
        </div>
        <div className="pt-5">
          <h3 className="europa text-2xl text-center tracking-wide dark:text-blue-100 px-2">
            I design and code softwares best suited for your needs
          </h3>{" "}
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image src={profile}  alt='profile image'/>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image src={hero} alt='hero' />
      </div>
 

    </div>
  );
}

export default Header;
