import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Body from '../components/Body';
const Home: NextPage = () => {
  useEffect(()=>{
  AOS.init({
    duration: 400, 
    easing: 'ease',
  })
  },[])
  return (
    <div className='relative'>
      <Head>
        <title>Unekwe Francis</title>
        <meta name="description" content="Portfolio website of Unekwe Francis (Software Developer)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Body/>
       <Footer/>
    </div>
  )
}
export default Home
