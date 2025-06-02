import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-[#020e1f] text-white flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
                <img className='w-[100px]' src="https://i.pinimg.com/736x/dc/6c/7d/dc6c7dd7266b85dbcc7519bb1a2ca362.jpg"  alt="" />
                <span className='text-3xl font-bold'><Link to="/">My Vlogs</Link></span>
            </div>
            <ul className=''>
                <li className='font-bold hover:text-blue-900 inline-block px-[10px]'><Link to="/">HOME</Link></li>
                <li className='font-bold hover:text-blue-900 inline-block px-[10px] '><Link to="/addProduct">ADD VLOGS</Link></li>
            </ul>
        </nav>
  )
}

export default Nav