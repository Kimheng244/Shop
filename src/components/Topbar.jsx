import React from 'react'

function Topbar() {
  return (
    <div>
            <div className=' bg-slate-900 py-1'>
          <div className='container lg:px-[128px] mx-auto text-white flex justify-between'>
            <p>+855 069 55 99 80</p>
            <p className='hidden lg:flex'>Get 50% Off on Selected Items &emsp;|&emsp;Shop Now</p>
            <div>
              <select className='border-0 outline-0 pe-4'>
                <option value="" className='text-black'>EN</option>
                <option value="" className='text-black'>Bangla</option>
                <option value="" className='text-black'>Arabic</option>
                <option value="" className='text-black'>Urdu</option>
              </select>
              <select className='border-0 outline-0 pe-4 ms-5'>
                <option value="" className='text-black'>Location</option>
                <option value="" className='text-black'>USA</option>
                <option value="" className='text-black'>English</option>
                <option value="" className='text-black'>Thailan</option>
              </select>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Topbar
