import React from 'react'

function Aboutus() {
  return (
    <div>
      {/* <div className="bg-[url('/images/aboutbg.jpg')] h-full w-full bg-no-repeat bg-cover"> */}
      {/* ----------------------------MAIN DIV ---------------------------------*/}
      <div className="pb-[200px]">
        {/* ------------------------HEADING----------------------------------*/}
        <div className=" backimage w-full bg-no-repeat bg-cover">
          <p className="text-center text-white pt-[130px] md:pt-[180px] text-4xl font-bold">
            About us
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
        {/* -------------------------------FIRST CATEGORY------------------------ */}
        <div className="flex flex-col-reverse lg:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
          {/* -------------------------------------TITLE-------------------------- */}
          <div className="max-w-[600px] pt-[30px] md:pt-[0px]">
            <p className="text-center text-4xl font-bold ">Our Dishes</p>
            {/* ---------------------------------DESCRIPTION--------------------------------*/}
            <p className="pt-[10px] text-justify text-[18px] text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut animi
              quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.
            </p>
          </div>
          {/* P-------------------------------------IMAGE--------------------------------------- */}
          <div className="max-w-[600px]">
            <img src="/images/about1.jpg" alt="vape image" />
          </div>
        </div>

        {/* -----------------------------SECOND CATEGORY----------------------------------- */}
        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto justify-between pt-[30px] md:pt-[100px] md:gap-24 px-[30px] items-center  about">
          {/* ------------------------------IMAGE------------------------------ */}
          <div className="max-w-[600px]">
            <img src="/images/desserts.jpg" alt="gummies image" />
          </div>
          <div className="max-w-[600px]  pt-[30px] md:pt-[0px]">
            {/* ---------------------TITLE----------------------------------- */}
            <p className=" text-center text-4xl  font-bold">Our Dessert</p>
            {/*------------------------------------- DESCRIPTION---------------------------------  */}
            <p className="pt-[10px] text-justify text-[18px] text-gray-700 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut animi
              quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ut animi quis deserunt recusandae eos minima voluptatibus sapiente
              accusantium. Quis cumque veritatis inventore quisquam eligendi
              dolores est repellendus! Possimus laudantium, accusamus,
              distinctio cum est nesciunt doloremque, nobis deleniti aut beatae
              dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Aboutus
