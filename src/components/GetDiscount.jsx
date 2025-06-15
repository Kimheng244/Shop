import React from 'react'

function GetDiscount() {
  return (
    <div className='w-full mt-4 lg:mt-24' data-aos="fade-up"
     data-aos-duration="1000">
      <div className='container px-4 lg:px-[128px] mx-auto'>
        <h1 className='text-3xl font-bold mb-5'>Get Up to 70% off</h1>
        <div className='flex  flex-wrap justify-between'>
            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-50 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>100</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://xrockergaming.com/cdn/shop/files/2.0714201.png" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-red-300 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>29</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://bestier.net/cdn/shop/files/halloween-b.jpg?v=1734935785&width=2000" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-blue-500 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>90</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://www.displayninja.com/wp-content/uploads/2020/11/How-To-Choose-The-Right-Gaming-Monitor.jpg" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-green-500 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>50</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://hecategaming.com/cdn/shop/files/G5000_Gaming_Speaker_Catalog.webp?v=1713349421&width=5600" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetDiscount
