import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className="  ">

        <div className="bg-[honeydew] z-[100] ">

          <div className=" flex py-[60px] items-center  text-center md:text-start lg:justify-between justify-center containers flex-wrap flex-col md:flex-row  lg:items-start  footer ">
            <div className="p-5 ">
              <ul className=" items-center flex flex-col">
                <div className="max-w-[200px] pt-[30px] md:pt-16 ">
                  <Link href="/">
                    <img data-v-6d049e2b="" src="/images/logo.png" className="w-[100px] thumbnail" />
                  </Link>
                </div>
                <div className="text-center text-[18px] max-w-[300px] xl:max-w-[500px] font-medium md:text-[18px] pt-5  md:pb-10 ">
                  <p className="text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus iure, vel obcaecati sapiente voluptatem repellat
                    praesentium ad eius eligendi nobis?
                  </p>
                </div>
              </ul>
            </div>
            <div className="p-5 md:pt-24 md:pb-12">
              <ul className="tracking-wider ">
                <p className="  text-[18px] pb-4 font-bold text-black">Time & Details</p>
                <Link href="/">
                  <li className=" md:hidden block text-black font-medium text-[16px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  md:text-[18px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className=" md:hidden block text-black font-medium text-[18px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition md:text-[18px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className=" md:hidden block text-black font-medium text-[18px] hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition md:text-[18px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>

                <Link href="/opening-hours">
                  <li className=" text-black font-medium  hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[16px] md:text-[18px] pb-2   cursor-pointer">
                    Opening
                  </li>
                </Link>
                <Link href="/menu-price">
                  <li className=" text-black font-medium hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[16px] md:text-[18px] pb-2   cursor-pointer">
                    Our Menu Price
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 md:pb-12 ">
              <ul className="tracking-wider hidden md:block">
                <p className="  text-[18px] font-bold pb-4 text-black">Menu</p>
                <Link href="/">
                  <li className=" text-black  font-medium hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition text-[16px]  md:text-[18px] pb-2   cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className=" text-black font-medium hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition text-[16px]  md:text-[18px] pb-2   cursor-pointer">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className=" text-black font-medium hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[16px]  md:text-[18px] pb-2   cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            <div className="p-5 md:pt-24 pb-12 tracking-wider ">
              <ul>
                <p className="  text-[18px] font-bold pb-4 text-black ">Contact</p>
                <li className=" text-black  hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  font-medium text-[16px] md:text-[18px] pb-2 flex items-center gap-2   cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto: clearbusinessbyadrian@gmail.com " className="">clearbusinessbyadrian@gmail.com</a>
                </li>
                <li className=" text-black font-medium hover:text-red-800 hover:scale-105 duration-300 ease-in-out transition  text-[16px] md:text-[18px] pb-2 flex gap-2 items-center  cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel: 01416110958">01416110958</a>
                </li>
              </ul>
            </div>
          </div>
          <p className=" text-[12px] md:text-[18px] text-center pb-[15px]">
            copyright © 2022. All Rights Reserved
          </p>
        </div>
      </div>

    </div>

  )
}

export default Footer
