import React, { useState } from "react";
import '../styles/Home.module.css'
import { IconContext } from "react-icons";
import hero from "../public/hero.svg";
import profile from "../public/mf-avatar.svg";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import Image from "next/image";
import designer from "../public/designer.svg";
import frontend from "../public/frontend.svg";
import mentor from "../public/mentor.svg";
function Header() {
  interface flexItem {
    icon: string;
    title: string;
    desc:string;
    tools: string;
    toolsStat: string[];
    more: string;
    moreStat: string[];
  }
  const flexItems: flexItem[] = [
    {
      icon: frontend,
      title: "Software developer",
      desc:'I love to design things from scratch, and enjoy bringing brilliant software ideas to life',
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

      ],
    },
    {
      icon: designer,
      title: "Piping engineer",
      desc:'I have junior level experience in piping engineering and planning, i would love to explore more in this field soon',
      tools: "Fluent in",
      toolsStat: [
        "AutoCAD,",
        "PDMS,",
      ],
      more: "Utility Tools",
      moreStat: [
        "MS Excel",
      ],
    },
    {
      icon: mentor,
      title: "Tutor",
      desc:'I host different classes for junior developers to transition into mid-level devs. This gives me so much joy and i hope to transition full time to this',
      tools: "Inspirations",
      toolsStat: [
        "Web development,",
        "Software development,",
        "UI / UX,",
      ],
      more: "Tutor Stats",
      moreStat: [
        "Less than a year of tutoring, feels like much more though 😀",
      ],
    },
  ];
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(
    theme === "dark" ? true : false
  );
  const toggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center w-full  px-10 py-10">
        <div
          onClick={() => {
            setDarkMode(!darkMode);
            toggler();
          }}
          className="w-14 rounded-full h-14 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3 dark:bg-slate-700"
        >
          <IconContext.Provider value={{ className: "w-11 h-11 p-1" }}>
            {!darkMode ? <RiSunFill /> : <RiMoonClearFill color="black" />}
          </IconContext.Provider>
        </div>
        <div>logo here</div>
        <div className="md:mr-24 mr-12  relative">
          <button className="hover:text-white dark:hover:text-blue-100 hover:bg-blue-100 europa text-1xl dark:hover:bg-slate-700 dark:text-white cursor-pointer border-2 border-blue-100 dark:border-slate-700 px-5 py-3 rounded-full">
            Reach out
          </button>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center flex-col mt-24">
        <div>
          <h1 className="eurostile text-center text-6xl capitalize tracking-wide">
            Software Engineer
          </h1>
        </div>
        <div className="pt-5">
          <h3 className="europa text-2xl text-center tracking-wide dark:text-blue-100">
            I design and code softwares best suited for your needs
          </h3>{" "}
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image src={profile} />
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image src={hero} />
      </div>
      <div className="relative w-full pt-32 pb-48 flex-col bg-blue-100 flex justify-center items-center dark:bg-black px-5 md:px-0">
        <h1 className="text-center eurostile text-3xl font-bold poppins-regular text-white mb-6">
          Hi, I'm Francis. Great to have you here
        </h1>
        <div className="relative w-3/5 flex-wrap text-center">
          <h1 className="text-[20px] text-gray-100 dark:text-blue-100 europa">
            Since beginning my journey as a software developer, I've done remote
            work for agencies, worked for startups, and collaborated with
            talented individuals to create amazing products and designs for both
            business and consumer use. I'm quietly confident in my abilities,
            naturally curious, and always working on improving my skillset one
            design problem at a time.
          </h1>
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-5">
        <div className="relative -top-28 w-5/6 shadow-lg flex dark:shadow-2xl flex-col md:flex-row rounded-xl bg-white dark:bg-dark-100">
          {
            flexItems.map(item=>{
              return(
                <div key={item.more} className="w-full md:w-1/3 flex-wrap py-16 relative flex items-center flex-col px-11 border-b-[1px] md:border-b-0 md:border-r-[1px] last:border-0 border-gray-200 dark:border-slate-700">
                <div className="relative flex justify-center items-center py-4">
                  <Image src={item.icon}/>
                </div>
                <div className="relative flex justify-center items-center py-4">
                  <h1 className="font-bold tracking-wider dark:text-white uppercase text-20 eurostile">{item.title}</h1>
                </div>
                <div className="relative flex justify-center items-center py-4">
                  <h1 className="text-[16px] font-light text-gray-900 dark:text-white tracking-wider text-center pb-6 europa">{item.desc}</h1>
                </div>
                <div className="relative flex justify-center items-center">
                  <h1 className=" capitalize text-[19px] tracking-wider text-center text-blue-100 europa">{item.tools+':'}</h1>
                </div>
                <div className="relative flex justify-center items-center py-2">
                  <h1 className="capitalize text-[16px] font-light tracking-wider dark:text-white text-center pb-10 text-gray-900 europa">{item.toolsStat.map(each=> <p key={each} className="inline">{each + ' '}</p>)}</h1>
                </div>
                <div className="relative flex justify-center items-center">
                  <h1 className=" capitalize text-[19px] tracking-wider text-center text-blue-100 europa">{item.more+':'}</h1>
                </div>
                <div className="relative flex justify-center items-center py-2">
                  <h1 className="capitalize text-[16px] font-light tracking-wider text-center dark:text-white  text-gray-900 europa">{item.moreStat.map(each=> <p key={each} className="mb-3">{each + ' '}</p>)}</h1>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="relative dark:bg-black  mt-6 bg-blue-100 w-full pt-28 pb-8 flex items-center justify-center flex-col">
        <div className="relative -top-36 rounded-lg w-2/3 py-10  bg-blue-50 flex flex-col md:flex-row items-center justify-between md:px-2">
         <div className="h-full md:w-1/3 pb-6 md:pb-0 w-full  flex  justify-center md:items-center">
           <h1 className="text-2xl eurostile text-white">
          Start a project

           </h1>
         </div>
         <div className="h-full md:w-1/3 w-full pb-6 md:pb-0   flex justify-center items-center sm:px-2">
           <h1 className="text-1xl text-gray-100 europa text-center">
           Interested in collaborating? We should schedule a meeting. I’ll bring snacks.
           </h1>
         </div>
         <div className="h-full md:w-1/3 w-full   flex justify-center items-center ">
           <button className="px-6 py-3 text-1xl text-gray-100 europa border-2 border-blue-100 rounded-full hover:bg-blue-100 hover:text-black">
             Schedule
           </button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
