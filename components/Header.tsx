import React, { useState } from "react";
import "../styles/Home.module.css";
import { IconContext } from "react-icons";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Button from "./Button";
import Link from "next/link";
import { headerProps } from "../utils/types";

function Header({ showMenu, setShowMenu }: headerProps) {
  const [activeIndex, setIndexIndex] = useState(0);
  const tabItems = ["About", "Experience", "Projects"];
  const changeTab = (index: number) => {
    setIndexIndex(index);
  };
  const setMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative">
      {showMenu && (
        <div className="absolute bg-white/5 overflow-hidden backdrop-blur-sm z-50 w-screen h-screen top-0 right-0 bottom-0 transition">
          <div className="absolute w-4/5 h-full bg-theme-50 right-0 flex-col ">
            <div
              onClick={setMenu}
              className="z-50 w-full relative justify-end p-5 items-end right-0 flex md:hidden"
            >
              <IconContext.Provider value={{ color: "#66bb6a", size: "50" }}>
                <div>
                  <CgClose />
                </div>
              </IconContext.Provider>
            </div>
            {tabItems.map((items, index) => {
              return (
                <div
                  onClick={() => {
                    setShowMenu(!showMenu);

                    changeTab(index);
                  }}
                  key={`${items}-${index}`}
                  className={`relative flex flex-row justify-center items-center ml-6  p-8`}
                >
                  <a
                    href={`#${items}`}
                    className={`${
                      index !== activeIndex && "text-gray-100"
                    } text-lg cursor-pointer hover:text-green-400 ${
                      index === activeIndex && "text-green-400"
                    }`}
                  >
                    <p className="eurostile">{items}</p>
                  </a>
                </div>
              );
            })}
            <div className="relative flex  flex-row justify-center items-center ml-6 p-8">
              <Button
                href="https://docs.google.com/document/d/1qj0jUNRzkP_gAsl0NGUSsOGbrPUUwYSG3fzk3L0l4u0/edit?usp=sharing"
                text="Resume"
              />
            </div>
          </div>
        </div>
      )}
      <div className="z-10 fixed w-full h-[5px] bg-green-400"></div>
      <div className="relative w-full py-6 px-5 flex justify-between">
        <div className="relative w-12 h-12 rounded-full"></div>
        <div className="relative hidden justify-center items-center md:block">
          <div className="relative flex  flex-row justify-center items-center">
            {tabItems.map((items, index) => {
              return (
                <div
                  onClick={() => changeTab(index)}
                  key={`${items}-${index}`}
                  className={`relative flex flex-row justify-center items-center bg-blue-50  ml-6`}
                >
                  <a
                    href={`#${items}`}
                    className={`text-[13px] cursor-pointer hover:text-green-400 ${
                      index !== activeIndex && "text-gray-100"
                    } text-lg cursor-pointer hover:text-green-400 ${
                      index === activeIndex && "text-green-400"
                    }`}
                  >
                    <p className="eurostile">{items}</p>
                  </a>
                </div>
              );
            })}

            <div className="relative flex  flex-row justify-center items-center ml-6">
              <Button
                href="https://docs.google.com/document/d/1qj0jUNRzkP_gAsl0NGUSsOGbrPUUwYSG3fzk3L0l4u0/edit?usp=sharing"
                // href="../public/Resume.pdf"
                text="Resume"
              />
            </div>
          </div>
        </div>
        <div
          onClick={setMenu}
          className="relative block justify-center items-center md:hidden"
        >
          <IconContext.Provider value={{ color: "#66bb6a", size: "50" }}>
            <div>
              <BiMenuAltRight />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Header;
