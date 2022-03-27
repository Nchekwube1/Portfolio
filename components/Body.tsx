import React from "react";
import designer from "../public/designer.svg";
import frontend from "../public/frontend.svg";
import mentor from "../public/mentor.svg";
import Image from "next/image";
import digicore from "../public/digicoreLogo.png";
import monkey from "../public/main-logo.png";
function Body() {
  interface flexItem {
    icon: string;
    title: string;
    desc: string;
    tools: string;
    toolsStat: string[];
    more: string;
    moreStat: string[];
  }
  const flexItems: flexItem[] = [
    {
      icon: frontend,
      title: "Software developer",
      desc: "I love to design things from scratch, and enjoy bringing brilliant software ideas to life",
      tools: "Fluent in",
      toolsStat: [
        "HTML5,",
        "CSS,",
        "Sass,",
        "Javascript,",
        "Typescript,",
        "Python,",
        "Php",
      ],
      more: "Dev Tools",
      moreStat: [
        "VS Code",
        "TailwindCss",
        "Chakra UI",
        "Material UI",
        "Codepen",
        "Github",
        "Gitlab",
        "GraphQL",
        "Redux Toolkit",
      ],
    },
    {
      icon: designer,
      title: "Piping engineer",
      desc: "I have junior level experience in piping engineering and planning, i would love to explore more in this field soon",
      tools: "Fluent in",
      toolsStat: ["AutoCAD,", "PDMS,"],
      more: "Utility Tools",
      moreStat: ["MS Excel"],
    },
    {
      icon: mentor,
      title: "Tutor",
      desc: "I host different classes for junior developers to transition into mid-level devs. This gives me so much joy and i hope to transition full time to this",
      tools: "Inspirations",
      toolsStat: ["Web development,", "Software development,", "UI / UX,"],
      more: "Tutor Stats",
      moreStat: [
        "Less than a year of tutoring, feels like much more though 😀",
      ],
    },
  ];
  return (
    <>
      <div className="relative w-full pt-32 pb-48 flex-col bg-blue-100 flex justify-center items-center dark:bg-black px-5 md:px-0">
        <h1
          className="text-center eurostile text-3xl font-bold poppins-regular text-white mb-6"
          data-aos="fade-left"
        >
          Hi, I&apos;m Francis. Great to have you here
        </h1>
        <div
          className="relative w-4/5 md:w-3/5 flex-wrap text-center"
          data-aos-delay="100"
          data-aos="fade-right"
        >
          <h1 className="text-[20px] text-gray-100 dark:text-blue-100 europa">
            Since beginning my journey as a software developer, I&apos;ve done
            remote work for agencies, worked for startups, and collaborated with
            talented individuals to create amazing products and designs for both
            business and consumer use. I&apos;m quite confident in my abilities,
            naturally curious, and always working on improving my skillset one
            design problem at a time.
          </h1>
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-5">
        <div className="relative -top-28 w-5/6 shadow-lg flex dark:shadow-2xl flex-col md:flex-row rounded-xl bg-white dark:bg-dark-100">
          {flexItems.map((item, index) => {
            return (
              <div
                key={item.more}
                className="w-full md:w-1/3 flex-wrap py-16 relative flex items-center flex-col px-11 border-b-[1px] md:border-b-0 md:border-r-[1px] last:border-0 border-gray-200 dark:border-slate-900"
                data-aos="fade-in"
              >
                <div className="relative flex justify-center items-center py-4">
                  <Image src={item.icon} alt={`${item.desc}-${index}`} />
                </div>
                <div className="relative flex justify-center items-center py-4">
                  <h1 className="font-bold tracking-wider dark:text-white uppercase text-20 eurostile">
                    {item.title}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center py-4">
                  <h1 className="text-[16px] font-light text-gray-900 dark:text-white tracking-wider text-center pb-6 europa">
                    {item.desc}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center">
                  <h1 className=" capitalize text-[19px] tracking-wider text-center text-blue-100 europa">
                    {item.tools + ":"}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center py-2">
                  <h1 className="capitalize text-[16px] font-light tracking-wider dark:text-white text-center pb-10 text-gray-900 europa">
                    {item.toolsStat.map((each) => (
                      <p key={each} className="inline">
                        {each + " "}
                      </p>
                    ))}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center">
                  <h1 className=" capitalize text-[19px] tracking-wider text-center text-blue-100 europa">
                    {item.more + ":"}
                  </h1>
                </div>
                <div className="relative flex justify-center items-center py-2">
                  <h1 className="capitalize text-[16px] font-light tracking-wider text-center dark:text-white  text-gray-900 europa">
                    {item.moreStat.map((each) => (
                      <p key={each} className="mb-3">
                        {each + " "}
                      </p>
                    ))}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center py-4 flex-wrap px-6 ">
        <h3 className="md:text-2xl text-xl eurostile mb-6">
          I am proud to have worked for some amazing companies:
        </h3>
        <div className="flex flex-col md:flex-row w-full justify-center items-center mb-6">
          <div
            data-aos="fade-right"
            className=" relative w-56 flex justify-center items-center h-28 mb-4 md:mb-0 mx-3 py-12 px-8 shadow-lg rounded-lg"
          >
            <Image
              alt="digicoreltd"
              src={digicore}
              className=" relative w-full h-full"
            />
          </div>
          <div
            data-aos="fade-left"
            className=" relative w-56 flex justify-center items-center h-28 mb-4 md:mb-0 mx-3 py-8 px-8 shadow-lg rounded-lg"
          >
            <Image
              alt="monkeymusicgroup"
              src={monkey}
              className=" relative w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
