import React from 'react'

function HeroTow() {
  return (
    <div className='w-full h-[70vh] bg1-img'>
      <div className="container h-full px-4 lg:px-[128px] mx-auto items-center flex justify-end">
        <div className='w-full md:w-[60%] lg:w-[38%] bg-gray-600 p-10'>
             <h1 className='font-bold text-4xl md:text-6xl text-white my-4'>
                Get 5% Cash back on $200
             </h1>
             <p className='text-orange-50 font-bold text-xl'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
             <button className='px-10 py-3 hover:bg-slate-700 bg-slate-500 rounded-full text-xl font-bold mt-4 duration-200 text-white'>
                Learn More
             </button>
        </div>
      </div>
    </div>
  )
}

export default HeroTow
