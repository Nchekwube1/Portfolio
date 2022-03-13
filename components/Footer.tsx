import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="relative dark:bg-black  mt-6 bg-blue-100 w-full pt-28 pb-8 flex items-center justify-center flex-col" data-aos='zoom-in'>
    <div className="relative -top-44 rounded-lg w-2/3 py-10  bg-blue-50 flex flex-col md:flex-row items-center justify-between md:px-2">
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
       <Link href='/Schedule' passHref={true}>
       <button className="px-6 py-3 text-1xl text-gray-100 europa border-2 border-blue-100 rounded-full hover:bg-blue-100 hover:text-black">
         Schedule
       </button>
       </Link>
     </div>
    </div>
  </div>
  )
}

export default Footer