import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Unekwe Francis</title>
        <meta name="description" content="Portfolio website of Unekwe Francis (Software Developer)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

    </div>
  )
}
export default Home
