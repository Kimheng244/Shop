import React from 'react'

function TrendingProduct() {
  return (
    <div className='w-full h-[65vh] md:h-[50vh] lg:h-[80vh] ' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <div className='container mx-auto lg:px-[85px]'>
          <h1 className='text-black font-bold text-3xl pt-10 ps-3 lg:py-5'>Trending Products for you</h1>
          <div className='flex gap-3 flex-wrap px-4'>
            <div className=' sm:w-[48%] w-full lg:w-[48%] dark:bg-gray-200 rounded-xl shadow-xl'>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://www.hdwallpapers.in/download/white_cushion_lights_chairs_table_in_ash_wall_background_4k_hd_room-HD.jpg" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Furniture Village</p>
                    <p className='text-xl'>Delivery with in 24 hours</p>
                    <button className='px-10 py-3 hover:bg-slate-700 bg-slate-500 rounded-full text-xl font-bold mt-4 duration-200 text-white'>
                        Learn More
                    </button>
                </div>
           </div>
            <div className=' sm:w-[48%] w-full lg:w-[48%] dark:bg-gray-200 rounded-xl shadow-xl'>
                <div className='w-full h-[200px] overflow-hidden'>
                    <img src="https://wallpapers.com/images/hd/4k-office-background-z1ym74nsi02yneks.jpg" alt="" className='w-full h-full object-cover hover:scale-125 duration-300' />
                </div>
                <div className='p-8'>
                    <p className='text-2xl font-bold mb-3'>Furniture Village</p>
                    <p className='text-xl'>Delivery with in 24 hours</p>
                    <button className='px-10 py-3 hover:bg-slate-700 bg-slate-500 rounded-full text-xl font-bold mt-4 duration-200 text-white'>
                        Learn More
                    </button>
                </div>
           </div>
          </div>
          <div className="divider divider-primary py-20"></div>
      </div>
      
    </div>
  )
}

export default TrendingProduct
