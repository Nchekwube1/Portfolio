import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactTypingEffect, {ReactTypingEffectProps} from 'react-typing-effect';
import Header from '../components/Header';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unekwe Francis</title>
        <meta name="description" content="Portfolio website of Unekwe Francis (Software Developer)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* <ReactTypingEffect
        text={["Web developer", "Software developer" , "Tutor"]}
        eraseDelay={1000}
        eraseSpeed={100}
      /> */}

    </div>
  )
}
export default Home
