// import React from 'react'
// // import { Carousel } from 'react-responsive-carousel';

// function Banner() {
//   return (
//     <div className='relative'>
//       <img src="/images/slide.jpg " className=' lg:h-[100vh] h-[50vh] w-full ' alt="" />
//       <div className=' main text-black max-w-[500px]'>
//         <p className=' text-[19px] md:text-2xl lg:text-4xl font-bold'>THE YUMMY MOTION</p>
//         <p className='px-1 text-[14px] md:text-[16px] font-semibold'>Food is for eating, and good food is to be enjoyed…</p>
//         <p className='px-1 text-[14px] md:text-[16px] font-medium'>A great restaurant is one that just makes you feel like you're not sure whether you went out or you came home and confuses you.</p>
//         <div >
//           <button className='bg-[#d5b94b] px-5 py-2 mt-4 outline-black outline outline-1 ml-1      hover:text-[#b63b0e] hover:bg-[#eda504]  hover:underline hover:underline-offset-8'>Contact us</button>
//         </div>
//       </div>
//     </div>
//     // <Carousel>
//     //   <div>
//     //     <img src="images/3.jpeg" />
//     //     <p className="legend">Legend 1</p>
//     //   </div>
//     //   <div>
//     //     <img src="images/3.jpeg" />
//     //     <p className="legend">Legend 2</p>
//     //   </div>
//     //   <div>
//     //     <img src="images/3.jpeg" />
//     //     <p className="legend">Legend 3</p>
//     //   </div>
//     // </Carousel>
//   )
// }

// export default Banner

// import React, { useState } from 'react'

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const handleSlideChange = (index) => {
//     setActiveIndex(index)
//   }

//   const slides = [
//     {
//       src: '/images/1.jpg',
//       alt: 'Image 1',
//     },
//     {
//       src: '/images/2.jpg',
//       alt: 'Image 2',
//     },
//     {
//       src: '/images/3.jpg',
//       alt: 'Image 3',
//     },
//   ]

//   return (
//     <div className="relative pb-10">
//       <div className="relative h-64">
//         {slides.map((slide, index) => (
//           <img
//             key={slide.alt}
//             src={slide.src}
//             alt={slide.alt}
//             className={`absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ${
//               index === activeIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//         <div className="absolute bottom-0 left-0 p-4">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-6 h-6 rounded-full focus:outline-none ${
//                 index === activeIndex
//                   ? 'bg-white'
//                   : 'bg-gray-300 hover:bg-white'
//               }`}
//               onClick={() => handleSlideChange(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner
import React, { useState, useEffect } from 'react'

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((activeIndex + 1) % slides.length)
    }, 4000)
    setIntervalId(id)
    return () => clearInterval(intervalId)
  }, [activeIndex])

  const handleSlideChange = (index) => {
    clearInterval(intervalId)
    setActiveIndex(index)
  }

  const slides = [
    {
      src: '/images/2.jpg',
      alt: 'Image 1',
      heading: 'Slide 1',
      text: 'This is the first slide',
    },
    {
      src: '/images/3.jpg',
      alt: 'Image 2',
      heading: 'Slide 2',
      text: 'This is the second slide',
    }
  ]

  return (
    <div className="h-screen bg-gray-100 pt-[10px]">
      <div className="h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`relative w-full h-full overflow-hidden ${
              index === activeIndex ? 'block' : 'hidden'
            }`}
          >
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="absolute bottom-0 p-10">
              <h3 className="text-3xl font-bold text-white">{slide.heading}</h3>
              <p className="text-xl text-white">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage



