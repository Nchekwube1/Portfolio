import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect, useRef, useState } from "react";
import { CubeSpinner } from "react-spinners-kit";
import Experience from "../components/Experience";
const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (showMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);
  return loading ? (
    <div className="w-full h-screen bg-theme-50 flex justify-center items-center scroll-smooth">
      <CubeSpinner
        size={60}
        frontColor="#66bb6a"
        backColor="#4db6ac"
        loading={loading}
      />
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
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};
export default Home;
