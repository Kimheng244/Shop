import React from 'react'
import categories from '../data/Categories';

function ShopCategories() {
  return (
    <div className='w-full mt-4 lg:mt-24'>
        <div className='container px-4 lg:px-[128px] mx-auto'>
            <h1 className='text-xl font-bold mb-5 lg:text-center lg:text-3xl'>Shop Our Top Categoires</h1>
            {/* card */}
            <div className='flex flex-wrap gap-2 justify-between'>
                {
                    categories.map((v,i)=>{
                      return(
                        <div key={i} className='w-[48.5%] md:w-[32%] lg:w-[16%] h-[230px] rounded-xl overflow-hidden relative'>
                            <h1 className='absolute z-3 letf-1/2 transform -translate-x-1/2 top-3 font-bold text-white text-2xl'>
                                {v.title}
                            </h1>
                            <img src={v.img} alt="No image" className='w-full h-full object-cover hover:scale-125 duration-400 cursor-pointer' />
                        </div>
                      )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ShopCategories

