import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { IoClose, IoMenu } from 'react-icons/io5'
import { TbLocationSearch, TbPhotoSearch } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const[menuOpen, setMenuOpen] = useState(false);


    const menuItem = [
        {name: 'Home', to: '/'},
        {name: 'Contact', to:'/contact'},
        {name: 'Service', to:'/service'},
        {name: 'About', to:'/about'}
    ]
  return (
    <div className='container mx-auto lg:px-[128px] py-1 flex justify-between px-3'>
        {/* logo & menu part */}
        <div>
            <div className='flex items-center justify-between w-[50%]'>
                <div className='flex items-center me-5'>
                    <div className='w-[50px] h-[50px]'>
                        <img src="logo.png" alt="" />
                    </div>
                    <p className='ps-2 text-2xl  font-black'>ShopCart</p>
                </div>
                {/* Meun */}
                <ul className='hidden lg:flex ms-[20px]'>
                    {
                        menuItem.map((item, index)=>(
                            <li key={index} className='mx-5 text-xl hover:text-slate-500 hover:scale-110 duration-300 ease-in-out'>
                                <NavLink to={item.to}> {item.name}</NavLink>
                            </li>
                        ))

                    }
                </ul>
                {/* Serch & acc part */}
                <div className='justify-between w-[50%]  hidden lg:flex'>
                    <form action="" className='px-5'>
                        <div className='flex items-center border border-slate-500 rounded-lg p-1'>
                            <input type="text" placeholder='Search'  className='outline-0'/>
                            <button>
                                <CiSearch/>
                            </button>
                        </div>
                    </form>
                    {/* userAcc */}
                    <div className='flex items-center ps-[px]'>
                        <NavLink className="flex items-center mx-3">
                            <FaUserCircle className='me-2 text-2xl'/>
                            <span>Account</span>
                        </NavLink>
                        <NavLink className="flex items-center">
                            <FaCartShopping className='me-2 text-2xl'/>
                            <span>Cart</span>
                        </NavLink>
                    </div>
                </div>
                
            </div>
        </div>
        <button className='block lg:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose className='text-3xl'/> : <IoMenu className='text-3xl'/>}
        </button>

        <div className={` ${menuOpen ? 'opacity-100 translate-16 pointer-events-auto' : 'opacity-0 -translate-14 pointer-events-none'}
            w-[90%] lg:hidden  absolute duration-300
            left-1/2 transform -translate-x-1/2 p-4 shadow-md rounded-2xl bg-white
            
        `}>
        <ul className=''>
                    {
                        menuItem.map((item, index)=>(
                            <li key={index} className='mx-5 py-4 border-b-1 text-xl hover:text-slate-500 hover:scale-110 duration-300 ease-in-out'>
                                <NavLink to={item.to}> {item.name}</NavLink>
                            </li>
                        ))

                    }
        </ul>
        <div className=' w-[80%] py-3 '>
                    <form action="" className='px-5 '>
                        <div className=' items-center border border-slate-500 rounded-lg p-2'>
                            <input type="text" placeholder='Search'  className='outline-0'/>
                            <button>
                                <CiSearch/>
                            </button>
                        </div>
                        <div className='flex items-center py-3'>
                        <NavLink className="flex items-center ">
                            <FaUserCircle className='me-2 text-2xl'/>
                            <span>Account</span>
                        </NavLink>
                        <NavLink className="flex items-center">
                            <FaCartShopping className='mx-2 text-2xl'/>
                            <span>Cart</span>
                        </NavLink>
                    </div>
                    </form>
                    {/* userAcc */}
                    
                </div>
        </div>
    </div>
  )
}

export default Navbar
