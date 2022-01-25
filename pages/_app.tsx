import '../styles/globals.css'
import {AnimateSharedLayout} from 'framer-motion'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
