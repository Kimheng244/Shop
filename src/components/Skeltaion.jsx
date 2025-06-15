import React from 'react'

function Skeltaion() {
  return (
    <div className='w-[49%] md:w-[32] shrink-0 animate-pulse' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div className='w-full h-[350px] bg-gray-300 rounded-lg overflow-hidden relative'>
            <div className='btn btn-circle absolute end-3 top-3 bg-gray-400'></div>
            <div className='w-full h-full bg-gray-300 '></div>
        </div>
        <div className='py-5 flex justify-between'>
            <div className='flex-1'>
                <div className='h-6 bg-gray-300 rounded w-3/4 mb-3'></div>
                <div className='h-4 bg-gray-300 rounded w-full mb-3'></div>
                <div className='h-4 bg-gray-300 rounded w-5/6 mb-3'></div>
                <div className='h-5 bg-gray-300 rounded w-1/3 mb-3'></div>
                <div className='h-10 bg-gray-300 rounded-3xl mb-3'></div>
            </div>
            <div className='flex items-start'>
                <div className='h-6 bg-gray-300 rounded w-16'></div>
            </div>
        </div> 
    </div>
  )
}

export default Skeltaion
