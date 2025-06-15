import React from 'react'
import { GiTwoFeathers } from 'react-icons/gi'
import { SiElectronbuilder, SiEllo } from 'react-icons/si'

function Footers() {
  return (
    <div className='w-full lg:h-[80vh] h-[40px] 'data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className='container flex lg:px-[85px]'>
                <div className=' lg:pt-3 pt-[142%] md:p-[70px]  lg:w-[100%] lg:justify-between lg:flex'>
                        <div>
                            <div className='flex items-center lg:mx-1 mx-6 lg:mt-4'>
                                <div className='w-[60px] h-[60px] logo '></div>
                                <p className='text-5xl font-bold ms-1 lg:text-2xl'>ShopCart</p>
                            </div>
                            <div className='lg:w-[60%] mx-6 my-2 lg:mx-1'>
                                <p className='font-normal text-xl lg:my-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                <h2 className='text-xl font-normal '>Accepted Payments</h2>
                            </div>
                            <div className='md:w-[50%] lg:w-[60%] lg:h-[18%] w-[70%] h-[120px] card '></div>
                        </div>
                        
                            <div className='lg:justify-between lg:flex md:justify-between md:flex '>
                        <div className='  mt-[5%] lg:mx-2  flex mx-5 items-center '>
                            <ul className='lg:mb-[50%] md:mb-[80px]'>
                                <li className='text-2xl font-bold  '>Department</li>
                                <li className='mt-5 my-2 hover:scale-110 duration-300 hover:text-red-400'>Fashion</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Education Product</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Frozen Food</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Beverages</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Organic Grocery</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Office Supplies</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Beauty Products</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Books</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Electronics & Gadget</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Travel Accessories</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Travel Accessories</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Fitness</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Sneakers</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Toys</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Furniture</li>
                            </ul>
                            <ul className='mb-[190px] ms-10 lg:me-4'>
                                <li className='text-2xl font-bold'>About us </li>
                                <li className='mt-5 my-2 hover:scale-110 duration-300 hover:text-red-400'>About shopcart</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Careers</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>News & Blog</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Help</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Press Center</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Shop by location</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Shopcart brands</li>
                                <li className='hover:text-red-400 duration-300 hover:scale-110'>Affiliate & Partners</li>
                                <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Ideas & Guides</li>
                            </ul>
                        </div>
                        <div className='flex mx-5 lg:mt-[28px] md:mt-[5%]'>
                        <ul>
                            <li className='text-2xl font-bold'>Help</li>
                            <li className='mt-5 my-2 hover:scale-110 duration-300 hover:text-red-400'>Shopcart Help</li>
                            <li className='hover:text-red-400 duration-300 hover:scale-110'>Returns</li>
                            <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>track orders</li>
                            <li className='hover:text-red-400 duration-300 hover:scale-110'>contact us</li>
                            <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>feedback</li>
                            <li className='hover:text-red-400 duration-300 hover:scale-110'>Security & Fraud</li>
                        </ul>
                        <ul className='ms-[70px] '>
                            <li className='text-2xl font-bold'>Services</li>
                            <li className='mt-5 my-2 hover:scale-110 duration-300 hover:text-red-400'>Gift Card</li>
                            <li className='hover:text-red-400 duration-300 hover:scale-110'>Mobile App</li>
                            <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Shipping & Delivery</li>
                            <li className='hover:text-red-400 duration-300 hover:scale-110'>Order Pickup</li>
                            <li className='my-2 hover:scale-110 duration-300 hover:text-red-400'>Account Signup</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        <div className="divider divider-primary  lg:px-[85px] "></div> 
        {/* footer_End */}
        <div className='w-full container lg:px-[85px] lg:w-full '>
            <div className='flex justify-between  p-[1%]  mx-auto'>
                <div className='lg:flex '>
                    <div className='flex mx-3 my-3 items-center '>
                        <SiElectronbuilder/>
                        <p className='ms-2 hover:text-red-400'>Become Seller</p>
                        <GiTwoFeathers className='ms-4'/>
                        <p className='ms-2 hover:text-red-400'>Gift Cards</p>
                        <GiTwoFeathers className='ms-4'/>
                        <p className='ms-2 hover:text-red-400' >BHelp Canter</p>
                        
                    </div>
                    
                    <div className='flex mx-3 my-3'>
                        
                        <p className='hover:text-red-400'>Terms of Service</p>
                        <p className='hover:text-red-400 ms-5'>Privacy & Policy</p>
                        
                    </div>
                    <div className='mx-3 my-3'>
                        <p>All Right reserved by Musemind <a href="" className='link link-success'>ui/ux design</a> agency</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footers
