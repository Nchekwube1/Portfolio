import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
const Home: NextPage = () => {
  return (
    <div className="relative w-full bg-theme-50">
      <Head>
        <title>Unekwe Francis</title>
        <meta
          name="description"
          content="Portfolio website of Unekwe Francis (Software Developer)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
