import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Link } from 'react-router-dom'

const LandingPage = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className='px-5 flex justify-between'>
      <div className='px-16 mt-24'>
          <h2 className="text-4xl font-semibold text-gray-700">Welcome to</h2>
          <h1 className="text-6xl font-extrabold text-black mt-4">VMart</h1>
          <p className="text-lg text-gray-600 mt-4 italic">Quality, Variety, Convenience!</p>
          <h3 className="text-xl text-gray-600 mt-4">
            Your One Stop Solution For All Your Needs
          </h3>
        <div>
        {user ? 
          (
            <Link to="/cart"><button className='bg-black px-8 py-3 rounded-md mt-5 text-white hover:bg-gray-800 transition duration-300'>Cart</button></Link>
          ) : (
            <Link to="/login"><button className='bg-black px-8 py-3 rounded-md mt-5 text-white hover:bg-gray-800 transition duration-300'>Login</button></Link>
          )
        }
      </div>
      </div>
      <div className='px-20'>
        <img src="/assets/5865.jpg" alt="" className='w-[550px] max-w-full h-auto'/>
      </div>
    </div>
  )
}

export default LandingPage