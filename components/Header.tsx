import React, { useState } from 'react';
import {IconContext} from 'react-icons'
import {FiSun, FiMoon} from 'react-icons/fi'
import {RiMoonClearFill,RiSunFill} from 'react-icons/ri'
function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return( <div className='flex  items-center w-full h-32 px-10' >
    <div onClick={()=> setDarkMode(!darkMode)} className='w-20 rounded-full h-20 flex justify-center shadow-inner cursor-pointer items-center bg-gray-100 absolute right-3'>
    <IconContext.Provider value={{className:"w-16 h-16 p-1"}}>
 {  !darkMode? <RiSunFill />
 :
    <RiMoonClearFill/>}
    </IconContext.Provider>
    </div>

  </div>);
}

export default Header;
