import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Head from 'next/head'
import React from 'react'

function NotFOund() {
  return (
    <div>
        <Head>
        <title>NOT FOUND | The Yummy Motion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
      <Header/>
      <div className='py-[100px]'>
     <p>Not Found</p>
      </div>
      <Footer/>

      </main>
    </div>
  )
}

export default NotFOund