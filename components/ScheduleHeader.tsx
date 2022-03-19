import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import profile from "../public/mf-avatar.svg";
function ScheduleHeader() {
  return (
    <div className="relative w-full py-10 px-10" data-aos="fade-up">
      <div className="relative w-full flex items-center justify-between px-5">
        <div>Logo here</div>

        <div className="cursor-pointer">
          <Link href={"/"} passHref={true}>
            <VscChromeClose size={28} color={"#7510F7"} />
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex my-3 justify-center items-center">
        <div className="relative w-20 h-20 ">
          <Image
            className="relative w-full h-full"
            src={profile}
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}

export default ScheduleHeader;
