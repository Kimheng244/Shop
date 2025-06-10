import React from 'react'

function GetDiscount() {
  return (
    <div className='w-full mt-4 lg:mt-24'>
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
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-50 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>29</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-50 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>90</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>

            <div className='my-3 sm:w-[48%] lg:w-[24%] bg-yellow-50 rounded-xl overflow-hidden'>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Save</p>
                    <p className='text-5xl font-bold'><sup>$</sup>50</p>
                    <p className='text-xl'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetDiscount
