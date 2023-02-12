import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ContactUs from '@/components/Contactus'
import Head from 'next/head'
import React from 'react'

function contact() {
  return (
    <div>
      <Head>
        <title>CONTACT US | The Yummy Motion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <Header />
        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}

export default contact