import React from 'react'
import { assets } from './../../../admin/src/assets/assets';

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img
        className='w-[max(10%,80px)]'
        src={assets.logo} alt="logo" />
        <button className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
