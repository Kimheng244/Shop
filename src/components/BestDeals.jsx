import React, { useContext } from 'react'
import ProductContext from '../Store/ProductContext'
import Skeltaion from './Skeltaion'
import { IoMdHeartEmpty } from 'react-icons/io'

function BestDeals() {
    const {items,isLoadinng} = useContext(ProductContext)
  return (
    <div className='container mx-auto lg:px-[85px] p-4'  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <h1 className='text-2xl font-black'>Todays Best Deals for you!</h1>
      <div className='my-5 '>
        <button className="btn btn-dash  btn-primary rounded-full mx-4 px-7   ">Default</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7  ">Primary</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7    ">Secondary</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7   ">Accent</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7  ">Info</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7 md:mt-2  ">Success</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7 md:mt-2  ">Warning</button>
        <button className="btn btn-dash btn-primary rounded-full mx-4 px-7 md:mt-2    ">Error</button>
      </div>
      <div className='w-full mt-4 lg:mt-24'>
        <div className='container px-4 lg:px-[85px] mx-auto'>
            <div className='overflow-x-auto mb-5'>
                <div className='flex flex-wrap gap-5'>
                    {/* card product */}
                    {
                        isLoadinng ?
                        (
                            <Skeltaion/>
                        )
                        :
                        (
                            items.map((v,i)=>{
                                return(
                                    <div key={i} className='w-[46%] md:w-[30%] shrink-0'>
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
                                                <button className='border lg:px-10 px-3 py-3 rounded-3xl cursor-pointer hover:bg-orange-600 hover:text-white duration-300 mt-3'>
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
    </div>
  )
}

export default BestDeals
