import React, { useState } from 'react';
import {IconContext} from 'react-icons'
import {FiSun, FiMoon} from 'react-icons/fi'
import hero from '../public/hero.svg'
import profile from '../public/mf-avatar.svg'
import {RiMoonClearFill,RiSunFill} from 'react-icons/ri'
import { useTheme } from 'next-themes'
import Image from 'next/image';
function Header() {

  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState<boolean>(theme === 'dark'? true: false)
  const toggler =()=>{
     return theme === 'light'? setTheme('dark'): setTheme('light')
  }
  return( 
    <div className='relative w-full'>


  <div className='flex justify-between items-center w-full  px-10 py-10' >
    <div onClick={()=> {setDarkMode(!darkMode); toggler() }} className='w-20 rounded-full h-20 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3 dark:bg-slate-700'>
    <IconContext.Provider value={{className:"w-16 h-16 p-1"}}>
 {  !darkMode? <RiSunFill />
 :
    <RiMoonClearFill color='black'/>}
    </IconContext.Provider>
    </div>
    <div>
      logo here
    </div>
    <div className='mr-24 relative'>
      <button className='hover:text-white dark:hover:text-purple-400 hover:bg-purple-400 font-Poppins-Bold font text-2xl dark:hover:bg-slate-700 dark:text-white text-purple-400 cursor-pointer border-2 border-purple-400 dark:border-slate-700 px-10 py-5 rounded-full'>Reach out</button>
    </div>

  </div>
  <div className='relative w-full flex justify-center items-center flex-col mt-32'>
   <div><h1 className='font-Poppins-Bold text-center text-8xl capitalize tracking-normal'>Software developer, Piping Engineer and Tutor</h1></div>
   <div className='pt-8'><h3 className='text-3xl text-center capitalize tracking-normal dark:text-purple-400 text-gray-500 font-Poppins-Regular'>I design and code softwares best suited for your needs</h3> </div>
  </div>
  <div className='relative flex justify-center items-center mt-16'>
    <Image src={profile} />
  </div>
  <div className='relative flex justify-center items-center mt-16'>
    <Image src={hero} />
  </div>
  <div className='relative w-full py-56 flex-col bg-purple-400 flex justify-center items-center dark:bg-slate-700'>
    <h1 className='text-5xl font-bold font-Poppins text-white mb-14'>Hi, I'm Francis. Great to have you here</h1>
    <div className='relative w-3/5 flex-wrap text-center'>
   <p className='text-3xl text-gray-100 dark:text-purple-400'>
   Since beginning my journey as a software developer, I've done remote work for agencies, worked for startups, and collaborated with talented individuals to create amazing products and designs for both business and consumer use. I'm quietly confident in my abilities, naturally curious, and always working on improving my skillset one design problem at a time.
   </p>
    </div>
  </div>
  </div>

  );
}

export default Header;
