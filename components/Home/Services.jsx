import React from 'react'

function Services() {
    return (
        <div>
            <div className=" ">
                <p className='text-center mt-20 text-3xl font-bold'>Our Services</p>
                <div className="container mx-auto py-16 lg:px-12 px-5">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="p-3 bg-white shadow-md shadow-orange-500 rounded-lg px-5 py-6">
                            <img src="/images/s1.png" width="50" className="mb-3 m-auto" />
                            <span className="font-bold text-xl flex justify-center">Free Home Delivery</span>
                            <p className="mt-2 text-justify">Mauris nec nisi dapibus, efficitur arcu eu, vehicula ligula. Maecenas dolor elit, pretium et ultrices in, vulputate et augue. Pellentesque efficitur lacus massa, eu tristique lectus tempor in. Suspendisse suscipit venenatis arcu. Aliquam a eleifend tellus. Aliquam lacinia auctor porttitor</p>
                        </div>
                        <div className="p-3 bg-white shadow-md shadow-orange-500 rounded-lg px-5 py-6">
                            <img src="/images/s2.png" width="50" className="mb-3 m-auto" />
                            <span className="font-bold text-xl flex justify-center">Buffet </span>
                            <p className="mt-2 text-justify">Mauris nec nisi dapibus, efficitur arcu eu, vehicula ligula. Maecenas dolor elit, pretium et ultrices in, vulputate et augue. Pellentesque efficitur lacus massa, eu tristique lectus tempor in. Suspendisse suscipit venenatis arcu. Aliquam a eleifend tellus. Aliquam lacinia auctor porttitor</p>
                        </div>
                        <div className="p-3 bg-white shadow-md shadow-orange-500 rounded-lg px-5 py-6">
                            <img src="images/s3.jpg" width="50" className="mb-3 m-auto" />
                            <span className="font-bold text-xl flex justify-center">Birthday celebration</span>
                            <p className="mt-2 text-justify">Mauris nec nisi dapibus, efficitur arcu eu, vehicula ligula. Maecenas dolor elit, pretium et ultrices in, vulputate et augue. Pellentesque efficitur lacus massa, eu tristique lectus tempor in. Suspendisse suscipit venenatis arcu. Aliquam a eleifend tellus. Aliquam lacinia auctor porttitor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
