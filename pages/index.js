import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/common/Header'
import Banner from '@/components/Home/Banner'
import Products from '@/components/Home/Products'
import Footer from '@/components/common/Footer'
import Section from '@/components/Home/section'
import Services from '@/components/Home/Services'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Yummy Motion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
     <Header/>
     <Banner/>
     <Section/>
     <Products/>
     <Services/>
     <Footer/>

      </main>
    </>
  )
}
