import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div
      className="relative 
       mt-6  w-full flex items-center justify-center flex-col"
      // data-aos="zoom-in"
    >
      <div className="flex flex-row justify-center items-center w-full p-6">
        <div className="relative cursor-pointer   border-2 border-transparent mr-3  rounded-sm hover:border-2 hover:border-green-400 p-2">
          <IconContext.Provider
            value={{ color: "rgb(243 244 246)", size: "32px" }}
          >
            <Link href="https://github.com/Nchekwube1" passHref>
              <a>
                <FaGithubSquare />
              </a>
            </Link>
          </IconContext.Provider>
        </div>
        <div className="relative cursor-pointer p-2  border-2 border-transparent mr-3  rounded-sm hover:border-2 hover:border-green-400 ">
          <IconContext.Provider
            value={{ color: "rgb(243 244 246)", size: "32px" }}
          >
            <Link
              href="https://linkedin.com/in/unekwe-francis-56485b1ba"
              passHref
            >
              <a>
                <ImLinkedin />
              </a>
            </Link>
          </IconContext.Provider>
        </div>
        <div className="relative cursor-pointer  p-2  border-2 border-transparent mr-3  rounded-sm hover:border-2 hover:border-green-400 ">
          <IconContext.Provider
            value={{ color: "rgb(243 244 246)", size: "32px" }}
          >
            <Link href="https://twitter.com/FrancisUnekwe" passHref>
              <a>
                <FaTwitterSquare />
              </a>
            </Link>
          </IconContext.Provider>
        </div>
        <div className="relative cursor-pointer p-2 border-2 border-transparent mr-3 rounded-sm hover:border-2 hover:border-green-400 ">
          <IconContext.Provider
            value={{ color: "rgb(243 244 246)", size: "34px" }}
          >
            <Link href="mailto:unekwenchekwube@gmail.com" passHref>
              <a>
                <MdEmail />
              </a>
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Footer;
