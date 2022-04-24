import React, { useState } from "react";
interface rolesInterface {
  Role: String;
  Duration: String;
  tasks: String[];
}
function Experience() {
  const [current, setCurrent] = useState(0);
  const jobsArr = ["Digicore", "Monkey Music"];
  const Roles: rolesInterface[] = [
    {
      Role: "React Native Developer",
      Duration: "Jan 2022 - Present",
      tasks: [
        "Write modern, maintable component based codes reusable across different projects.",
        "Work with and be able to pick up new technologies including Typescript, React Native, Java, etc. ",
        "Design pixel perfect UI translated from given designs.",
      ],
    },
    {
      Role: "Mobile Developer",
      Duration: "Dec 2021 - Present",
      tasks: [
        "Design pixel perfect UI translated from given designs.",
        "Work with modern tools and frameworks including Redux toolkit, React Native, Typescript etc.",
        "Write unit tests for every component using jest.",
      ],
    },
  ];
  return (
    <div
      id="Experience "
      className="text-white py-8 lg:py-0 px-6  md:px-16 w-full"
    >
      <div className="flex flex-col relative">
        <div>
          <h2 className="text-3xl lg:text-4xl source-bold">Experience</h2>
        </div>
        <div className="w-8 rounded-lg relative h-2 bg-green-400"></div>
      </div>
      <div className="relative flex flex-col md:flex-row w-full py-9 md:px-16 ">
        <div className="relative  flex flex-row md:flex-col  overflow-scroll justify-center">
          {jobsArr.map((job, index) => {
            return (
              <div
                key={job}
                onClick={() => {
                  setCurrent(index);
                }}
                className={`relative border-b-2 md:border-b-0 md:border-l-2  w-full hover:bg-green-400 hover:bg-opacity-5 hover:text-green-400 rounded-r-sm ${
                  index !== current && "border-white/40 text-white/70"
                }  py-3 px-5 cursor-pointer  ${
                  index === current &&
                  "border-green-400 text-green-400 bg-green-400 bg-opacity-5 flex-nowrap"
                }`}
              >
                <h2 className="relative flex-nowrap">{job}</h2>
              </div>
            );
          })}
        </div>
        <div className="relative  px-7 animate-transition">
          {
            <div className="transition-opacity ease-in-out delay-150 md:mt-0 mt-9 ">
              <h2 className="relative capitalize eurostile text-xl">
                {Roles[current].Role}
              </h2>
              <h2 className="relative capitalize source-regular text-sm mt-2 text-white/70">
                {Roles[current].Duration}
              </h2>
              {Roles[current].tasks.map((task, index) => {
                return (
                  <div
                    key={`task-${index}`}
                    className="relative my-7 flex items-center "
                  >
                    <div className="w-2 h-2 border-green-400 border-[1px] bg-transparent  mr-4 rounded-full"></div>
                    <div className=" ">
                      <h4 className="relative source-regular text-base text-white/70">
                        {task}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
