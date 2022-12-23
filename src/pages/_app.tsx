import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { Playfair_Display } from '@next/font/google'

import 'styles/globals.css'
import Header from 'components/Header'
import Footer from 'components/Footer'

const inter = Inter({ 
  weight: ['400', '800'], 
  subsets: ['latin'], 
  variable: '--font-inter', 
})
const playfairDisplay = Playfair_Display({ 
  weight: '700', 
  subsets: ['latin'],
  variable: '--font-playfair', 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${playfairDisplay.variable} font-inter`}>
      <Header />
      <main className='pt-20'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
