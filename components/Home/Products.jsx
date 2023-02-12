import React from 'react'

function Products() {
    return (
        <div className='mt-20 bg-[black] '>
<div className='py-20'>

            <p className='text-3xl mb-20 text-center font-semibold text-white '>We like peoples who love to eat</p>
            <div className='px-5  container m-auto flex gap-5 md:flex-row items-center flex-col'>
                <div className='relative overflow-hidden bg-no-repeat bg-cover '>
                    <img className='hover:scale-110 transition duration-300 ease-in-out' src="/images/p1.jpg" alt="" />
                </div>
                <div className='relative overflow-hidden bg-no-repeat bg-cover '>
                    <img className='hover:scale-110 transition duration-300 ease-in-out' src="/images/p2.jpg" alt="" />
                </div>
                <div className='relative overflow-hidden bg-no-repeat bg-cover '>
                    <img className='hover:scale-110 transition duration-300 ease-in-out' src="/images/p3.jpg" alt="" />
                </div>
            </div>
</div>
        </div>
    )
}

export default Products
