import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
