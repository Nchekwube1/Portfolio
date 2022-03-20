import React, { useState } from "react";
import SchduleForm from "../components/SchduleForm";
import ScheduleHeader from "../components/ScheduleHeader";

function Schedule() {
  const [emailSent, setEmailSent] = useState(false);
  const [emailRes, setEmailRes] = useState("");
  return (
    <div className="flex flex-col justify-center w-full">
      {emailSent && (
        <div className="absolute top-14 w-full px-4 z-40 flex justify-center items-center">
          <div className="w-full md:w-1/3 py-5 shadow-md rounded-md flex flex-row justify-center items-center bg-green-400 relative">
            <h3 className="eurostile text-xl">{emailRes}</h3>
          </div>
        </div>
      )}
      <div className="relative w-full">
        <ScheduleHeader />
        <SchduleForm setEmailRes={setEmailRes} setEmailSent={setEmailSent} />
      </div>
    </div>
  );
}

export default Schedule;
