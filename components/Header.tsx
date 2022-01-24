import React, { useState } from 'react';
import {IconContext} from 'react-icons'
import {FiSun, FiMoon} from 'react-icons/fi'
import {RiMoonClearFill,RiSunFill} from 'react-icons/ri'
function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return( 
    <div className='relative w-full'>

  <div className='flex justify-between items-center w-full  px-10 py-10' >
    <div onClick={()=> setDarkMode(!darkMode)} className='w-20 rounded-full h-20 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3'>
    <IconContext.Provider value={{className:"w-16 h-16 p-1"}}>
 {  !darkMode? <RiSunFill />
 :
    <RiMoonClearFill/>}
    </IconContext.Provider>
    </div>
    <div>
      logo here
    </div>
    <div className='mr-24 relative'>
      <button className='hover:text-white hover:bg-purple-600 font-Poppins-Bold font text-2xl text-purple-600 cursor-pointer border-2 border-purple-600 px-10 py-5 rounded-full'>Reach out</button>
    </div>

  </div>
  <div className='relative w-full flex justify-center items-center flex-col mt-32'>
   <div><h1 className='font-bold font-SourceSansPro-Bold text-8xl space-x-3 capitalize tracking-wide'>Software developer</h1></div>
   <div className='pt-8'><h3 className='text-3xl capitalize tracking-normal text-gray-500 font-Poppins-Regular'>I design and code softwares best suited for your needs while loving what i do</h3> </div>
  </div>
  </div>

  );
}

export default Header;
