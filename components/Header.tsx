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
    <div className="relative">
      <div className="relative w-full h-[5px] bg-green-400"></div>
      <div className="relative w-full py-10 px-5 flex justify-between">
        <div className="relative w-12 h-12 bg-red-400 rounded-full"></div>
        <div className="relative flex justify-center items-center">
          <div className="relative flex  flex-row justify-center items-center">
            <Button
              href="https://docs.google.com/document/d/1qj0jUNRzkP_gAsl0NGUSsOGbrPUUwYSG3fzk3L0l4u0/edit?usp=sharing"
              text="Resume"
            />
          </div>
        </div>
      </div>
      {/* <div className="relative w-full bg-red-200 py-10">
        <div className="relative flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-center items-center  invisible md:visible">
            <div className="relative flex flex-row justify-center items-center ">
              <p className="text-green-400 text-sm">I.&nbsp;</p>
              <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
                <p className="eurostile">About</p>
              </a>
            </div>
            <div className="relative flex flex-row justify-center items-center ">
              <p className="text-green-400 text-sm">II.&nbsp;</p>
              <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
                <p className="eurostile">Experience</p>
              </a>
            </div>
            <div className="relative flex flex-row justify-center items-center ">
              <p className="text-green-400 text-sm">III.&nbsp;</p>
              <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
                <p className="eurostile">Projects</p>
              </a>
            </div>
            <div className="relative flex flex-row justify-center items-center ">
              <p className="text-green-400 text-sm">IV.&nbsp;</p>
              <a className="text-gray-100 text-sm cursor-pointer hover:text-green-400">
                <p className="eurostile">Contact</p>
              </a>
            </div>
            <div className="relative flex  flex-row justify-center items-center">
              <Button
                href="https://docs.google.com/document/d/1qj0jUNRzkP_gAsl0NGUSsOGbrPUUwYSG3fzk3L0l4u0/edit?usp=sharing"
                text="Resume"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
