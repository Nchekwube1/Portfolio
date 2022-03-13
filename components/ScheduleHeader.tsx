import { ErrorMessage, Field, Form,Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import profile from '../public/mf-avatar.svg'
function ScheduleHeader() {
  return (
    <div className='relative w-full py-10 px-10' data-aos='fade-up'>
    <div className='relative w-full flex items-center justify-between px-5' >
      <div>Logo here</div>

      <div className='cursor-pointer'>
        <Link href={'/'} passHref={true}>
        <VscChromeClose size={28} color={'#7510F7'} />
        </Link>
      </div>
    </div>
    <div className='relative w-full h-full justify-center items-center left-1/2'>
      <div className='relative w-20 h-20 '>

    <Image className='relative w-full h-full' src={profile}  alt='profile image'/>
      </div>
    </div>

    <div className='relative w-full px-8 pt-10'> 
      <h2 className='eurostile text-center text-4xl capitalize tracking-wide'>I&apos;m Buzzing to hear about your projects. Lets get started</h2>
    </div>
  <div className='relative w-full flex justify-center items-center'>

    <Formik
     initialValues={{ email: '', name: '' }}
     onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
    >
    {({ isSubmitting }) => (
         <Form className='relative py-12 px-8 flex justify-between items-center w-3/5  flex-wrap'> 
         <div className='flex flex-col'>
           <label>
           Name:
           <input required type="text" name="Name" className='w-2/5 relative' />
           </label>
           </div>
           <label>
           Email:
           <input required type="email" name="Email"  className='w-2/5 relative'/>
           </label>
           <label>
           Project type:
           <select required className='w-2/5 relative'>
  <option value=""></option>
  <option value="Web app">Web app</option>
  <option value="Mobile app">Mobile app</option>
</select>
           </label>
           <label>
             Budget:
             <input required type='number' name='Budget' className='w-2/5 relative'/>
           </label>
           <button type="submit" disabled={isSubmitting} className='w-2/5 relative'>
             Submit
           </button>
         </Form>
       )}
    </Formik>
    </div>

    </div>
  )
}

export default ScheduleHeader