

import Link from "next/link";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import RequestMessage from "../common/RequestMessage";


function ContactUs() {
  const fields = { name: "", email: "", message: "" };
  const [inputField, setInputFields] = useState(fields);
  const [errors, setErrors] = useState({});
  const ref = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputField, [name]: value });
    // console.log(inputField);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(inputField);
  };
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is Required *";
    }
    if (!values.email) {
      error.email = "Email is Required *";
    }
    if (!values.message) {
      error.message = "Message is Required *";
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
      // console.log(error)
    } else {
      // emailjs.sendForm("service_jog37ol", "template_vm008mn", ref.current, "tRRATwKkMHYiurDaS")
      //   .then((result) => {
      //     setErrors(fields);
          setInputFields(fields);
          toast(<RequestMessage image="/icons/sent.png" color="text-red-500" message="Message send Successfully " />)
      //   }, (error) => {
          // console.log(error.text);
          setErrors(fields);
          // toast(<RequestMessage image="/icons/failed.png" color="text-red-500" message="Something went wrong" />)
        // });
    }
  };

  return (
    <div>
      <Head>

      </Head>
      <main>



        <div className=" backimage w-full bg-no-repeat bg-cover">
          <p className="text-center text-white pt-[130px] md:pt-[180px] text-4xl font-bold">
            Contact us
          </p>
          {/* ------------------------------TITLE----------------------------  */}
          <div className=" pt-[10px] pb-20 font-semibold  max-w-[800px] mx-auto px-[30px] md:text-[18px] text-medium text-white">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              a consequatur illo expedita officiis illum praesentium reiciendis
              voluptates quos quisquam ullam doloremque beatae fugiat laborum
              magnam sunt reprehenderit quia ducimus?
            </p>
          </div>
        </div>
        <div className="container m-auto w-[95%] ">
          <div className="lg:w-[80%] mt-[15px] md:my-[50px] border m-auto flex flex-col lg:flex-row lg:rounded-[30px]  lg:shadow-lg ">
            <div className="text-[12px] md:text-[16px]  w-full py-[50px] bg-black   lg:rounded-l-[30px] ">
              <p className=" 2xl:pl-[100px] text-orange-700 md:pl-[50px] pl-[10px]">
                CONTACT WITH US
              </p>
              <p className="text-[16px] text-orange-700 md:text-[20px] font-bold 2xl:pl-[100px] md:pl-[50px] pl-[10px]  pt-2">
                SEND US A MESSAGE
              </p>
              <form onSubmit={handleSubmit} ref={ref}>
                <div className="w-full px-[10px] md:px-[50px] 2xl:px-[100px] mt-[25px] ">
                  <input
                    className={`w-full outline-none border-black border py-3 rounded-lg pl-5 ${errors.name ? "border border-red-500" : ""}`}
                    type="text"
                    placeholder="Your Full Name"
                    name="name"
                    value={inputField.name}
                    onChange={handleChange}
                  />
                  <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.name}</p>
                </div>
                <div className="w-full   px-[10px] md:px-[50px]  2xl:px-[100px]  mt-[25px] ">
                  <input
                    className={`w-full outline-none border-black border py-3 rounded-lg pl-5 ${errors.email ? "border border-red-500" : ""}  `}
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    value={inputField.email}
                    onChange={handleChange}
                  />
                  <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.email}</p>
                </div>

                <div className="w-full  px-[10px] md:px-[50px]  2xl:px-[100px] mt-[25px]   ">
                  <textarea
                    className={`border border-black outline-none w-full p-3 rounded-lg ${errors.message ? "border border-red-500" : ""}  `}
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    value={inputField.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.message}</p>
                </div>
                <div className="flex justify-center mt-[30px]">
                  <button className="uppercase hover:bg-orange-800 px-10 py-3 bg-orange-700 text-white rounded-lg cursor-pointer" type="submit">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
            <div className=" py-[50px] ">
              <div className="text-center lg:w-[300px] xl:w-[400px] m-auto">
                <p className="md:text-[25px] text-[20px] font-bold">
                  CONTACT INFO.
                </p>
                <div>
                  <p className="mt-[50px] uppercase  md:text-[18px] font-bold">
                    Address
                  </p>
                  <p className="text-center text-[15px] mt-[15px] max-w-[215px] m-auto ">
                    Great Horton Road, Bradford, West Yorkshire, BD7 1PU
                  </p>
                </div>
                <div>
                  <p className="mt-[40px] text-center  uppercase md:text-[18px] font-bold">
                    Phone
                  </p>
                  <a href="tel: 123-456-3456"> <p className="text-center text-[15px] mt-[15px]  max-w-[215px] m-auto">
                    Contact no : <span className="hover:text-[#ffc233]">01416110958</span>
                  </p>
                  </a>
                </div>
                <div>
                  <p className="mt-[40px]  uppercase md:text-[18px] font-bold  max-w-[215px] m-auto">
                    OPENING HOURS
                  </p>
                  <p className="text-center text-[15px] mt-[15px]  max-w-[215px] m-auto">
                    Mon- Sun, 1:00 PM TO 11:00 AM
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default ContactUs;
