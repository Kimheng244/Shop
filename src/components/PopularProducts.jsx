import React, { useContext,  } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Skeltaion from './Skeltaion';
import ProductContext from '../Store/ProductContext';

function PopularProducts() {
      const {items,isLoading} = useContext(ProductContext)
  return (
    <div className='w-full mt-4 lg:mt-24' data-aos="fade-up"
     data-aos-duration="1000">
      <div className='container px-4 lg:px-[128px] mx-auto'>
        <h1 className='text-xl font-bold mb-5 lg:text-3xl lg:text-center'>Today Best Deals for you!</h1>
        <div className='overflow-x-auto mb-5'>
            <div className='flex flex-nowrap gap-5'>
                {/* card product */}
                  {
                    isLoading ?
                    (
                        <Skeltaion/>
                    )
                    :
                    (
                        items.map((v,i)=>{
                        return(
                            <div key={i} className='w-[49%] md:w-[32%] shrink-0'>
                                <div className='w-full h-[350px] bg-white shadow-lg rounded-lg overflow-hidden relative'>
                                    <button className='btn btn-circle absolute end-3 top-3'>
                                        <IoMdHeartEmpty className='text-2xl'/>
                                    </button>
                                    <img src={v.image} alt="" className='w-full h-full object-contain' />
                                </div>
                                <div className='py-5 flex justify-around'>
                                    <div>
                                        <p className='text-xl line-clamp-1 font-bold'>{v.name}</p>
                                        <p className='line-clamp-2 my-2 text-gray-600'>{v.description}</p>
                                        <p className='text-orange-600 text-xl'>{v.rating}</p>
                                        <button className='border lg:px-10 px-6 py-3 rounded-3xl cursor-pointer hover:bg-orange-600 hover:text-white duration-300 mt-3'>
                                            Add Card
                                        </button>
                                    </div>
                                    <div>
                                        <p>{v.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    )
                  }  
            </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
