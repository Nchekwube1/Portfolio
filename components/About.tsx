import React from "react";
import designer from "../public/designer.svg";
import frontend from "../public/frontend.svg";
import mentor from "../public/mentor.svg";
import Image from "next/image";
import digicore from "../public/digicoreLogo.png";
import monkey from "../public/main-logo.png";
import Button from "./Button";
import BigBtn from "./BigBtn";
import me from "../public/me.jpg";
function Body() {
  return (
    <div className="py-10 px-6 md:py-36 md:px-16 relative">
      <div className="relative w-full h-[70vh] flex flex-col  bg-theme-50 ">
        <div className="relative">
          <h2 className="source-regular text-lg md:text-2xl text-green-400">
            Hi, my name is
          </h2>
        </div>
        <div className="relative py-5">
          <h2 className="source-bold  text-4xl md:text-6xl lg:text-9xl  text-white/95">
            Unekwe Francis.
          </h2>
        </div>
        <div className="relative">
          <h2 className="source-bold  text-3xl md:text-6xl lg:text-6xl text-white/70">
            I develop softwares.
          </h2>
        </div>
        <div className="pt-9">
          <BigBtn href="/Schedule" text="Start a project" />
        </div>
      </div>
      <div id="About" className="text-white py-8 lg:py-0">
        <div className="flex flex-col relative">
          <div>
            <h2 className=" text-3xl lg:text-4xl source-bold">About Me</h2>
          </div>
          <div className="w-8 rounded-lg relative h-2 bg-green-400"></div>
          <div className="flex flex-col lg:flex-row">
            <div className="mt-5 w-full lg:w-1/2 source-regular py-2 text-white/75">
              Hello my name is Francis and i love to build engaging user
              interfaces for both web and mobile applications. Since i started
              in this journey i have built lots of projects through consistent
              practice, building, breaking and fixing things. I love what i do
              and i am always open to learn new technologies as i find building
              web and mobile applications very fun and i always strive to get
              better at what i do.
              <br />
              <br />I started my career as a web developer before exploring into
              mobile app developement and in this timeframe i have collaborated
              with talented individuals, worked freelance and also had the
              opportunity to work with some amazing companies.
            </div>
            <div className="relative w-full md:w-1/2 lg:w-1/2 h-full md:ml-40 lg:ml-0">
              <div className="w-full lg:w-3/4 relative h-96">
                <div className=" bg-black  z-50 rounded-xl w-[95%] lg:w-2/3 h-[90%] absolute right-6 bottom-6">
                  <Image
                    src={me}
                    alt="Unekwe Francis image"
                    layout="fill"
                    objectFit="cover"
                    className="relative  rounded-xl max-w-sm"
                  />
                  <div className=" w-full h-full bg-green-400 opacity-50 hover:opacity-0 rounded-xl absolute top-0"></div>
                </div>
                <div className="border-green-400 border-2 w-[95%] lg:w-2/3 h-[90%] rounded-xl  absolute right-1 bottom-0"></div>
              </div>

              {/* <Image
                src={me}
                alt="Unekwe Francis image"
                className="w-20 h-20 relative  rounded-xl "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
