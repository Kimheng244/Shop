import React from 'react'

function CashBack() {
  return (
    <div className='w-full h-[50vh] bg-slate-300'>
      <div className="container h-full  lg:px-[128px] mx-auto items-center flex justify-between">
        <div className='w-full md:w-[60%] lg:w-[38%] mx-10'>
             <h1 className='font-bold text-4xl md:text-6xl text-black my-4'>
               Get 5% Cash back
             </h1>
             <p className='text-black font-bold text-xl'>on Shopcart.com</p>
             <button className='px-10 py-3 hover:bg-slate-700 bg-slate-500 rounded-full text-xl font-bold mt-4 duration-200 text-white'>
                Learn More
             </button>
        </div>
        <div className='lg:h-[90%] w-[50%]  bg1-img'>
            <img src="" alt="" className='object-cover overflow-hidden'/>
        </div>
      </div>
    </div>
  )
}

export default CashBack
