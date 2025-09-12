import React from 'react'
import { Link } from 'react-router-dom'

const IndexNavbar = () => {
  return (
    <div>
        <nav className='backdrop-blur-sm bg-(rgba(255, 255, 255, 0.689)) p-5 px-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50'>
            <h1 className='text-3xl font-bold'>Vmart</h1>
            <div>
                <ul className='flex'>
                    <li className='mx-3 text-xl font-semibold bg-black px-4 py-2 rounded-full text-white cursor-pointer'>Home</li>
                    <li className='mx-3 text-lg font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer'>About</li>
                    <li className='mx-3 text-lg font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer'>Contact</li>
                    <li className='mx-3 text-lg font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default IndexNavbar