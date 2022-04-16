import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect, useState } from "react";
import { CubeSpinner } from "react-spinners-kit";
const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return loading ? (
    <div className="w-full h-screen bg-theme-50 flex justify-center items-center ">
      <CubeSpinner
        size={60}
        frontColor="#66bb6a"
        backColor="#4db6ac"
        loading={loading}
      />
      ;
    </div>
  ) : (
    <div className="relative w-full bg-theme-50 scroll-smooth">
      <Head>
        <title>Unekwe Francis</title>
        <meta
          name="description"
          content="Portfolio website of Unekwe Francis (Software Developer)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Footer />
    </div>
  );
};
export default Home;
