import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div
      className="relative dark:bg-black  mt-6 bg-blue-100 w-full pt-20 flex items-center justify-center flex-col"
      data-aos="zoom-in"
    >
      <div className="relative -top-24 rounded-lg w-2/3 py-10  bg-blue-50 flex flex-col md:flex-row items-center justify-between md:px-2">
        <div className="h-full md:w-1/3 pb-6 md:pb-0 w-full  flex  justify-center md:items-center">
          <h1 className="text-2xl eurostile text-white">Start a project</h1>
        </div>
        <div className="h-full md:w-1/3 w-full pb-6 md:pb-0   flex justify-center items-center px-2">
          <h1 className="text-1xl text-gray-100 europa text-center  relative">
            Interested in collaborating? We should schedule a meeting. I’ll
            bring snacks.
          </h1>
        </div>
        <div className="h-full md:w-1/3 w-full   flex justify-center items-center ">
          <Link href="/Schedule" passHref={true}>
            <button className="px-6 py-3 text-1xl text-gray-100 europa border-2 border-blue-100 rounded-full hover:bg-blue-100 hover:text-black">
              Schedule
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center w-full p-6">
        <div className="relative cursor-pointer   border-2 border-transparent mr-3  rounded-md hover:border-2 hover:border-white p-2">
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
        <div className="relative cursor-pointer p-2  border-2 border-transparent mr-3  rounded-md hover:border-2 hover:border-white ">
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
        <div className="relative cursor-pointer  p-2  border-2 border-transparent mr-3  rounded-md hover:border-2 hover:border-white ">
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
        <div className="relative cursor-pointer p-2 border-2 border-transparent mr-3 rounded-md hover:border-2 hover:border-white ">
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
