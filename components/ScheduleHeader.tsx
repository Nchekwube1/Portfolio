import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import profile from "../public/mf-avatar.svg";
import logo from "../public/mainLogoo.png";

function ScheduleHeader() {
  return (
    <div className="relative w-full py-10 px-10" data-aos="fade-up">
      <div className="relative w-full flex items-center justify-end px-5">
        {/* <div className="w-12 h-12 relative flex justify-center items-center">
          <Image alt="logo" src={logo} className="relative w-full h-full" />
        </div> */}

        <div className="cursor-pointer">
          <Link href={"/"} passHref={true}>
            <VscChromeClose size={28} color={"#7510F7"} />
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex my-3 justify-center items-center">
        <div className="relative w-40 h-40">
          <div className="image bg-black z-50 rounded-xl w-full lg:w-full h-[90%] absolute right-4 bottom-4"></div>
          <div className="border-green-400 border-2 w-full lg:w-full h-[90%] rounded-xl  absolute right-1 bottom-0"></div>
          {/* <Image
            className="relative w-full h-full"
            src={profile}
            alt="profile image"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ScheduleHeader;
