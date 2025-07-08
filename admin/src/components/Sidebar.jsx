import React from 'react'
import { Link } from 'react-router-dom'
// import { assets } from '../../../admin/src/assets/assets'
import { assets } from '../../../admin/src/assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <Link className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/add">
        <img className='w-5 h-5' src={assets.add_icon} alt="" />
        <p className='hidden md:block'>Add Items</p>

        </Link>
      </div>
    </div>
  )
}

export default Sidebar
