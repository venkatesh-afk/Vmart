import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {

  const {user, logout} = useContext(AuthContext)

  return (
    <div>
        <nav className="flex items-center justify-between bg-black text-white p-5 px-10 shadow-lg">
            <h1 className="text-3xl font-extrabold">VMart</h1>

            <ul className="flex space-x-6 items-center text-lg">
                <li>
                <Link to="/vmart" className="hover:text-gray-400 font-medium">
                    Home
                </Link>
                </li>

                {user ? (
                <>
                    <li>
                    <Link to="/cart" className="hover:text-gray-400 font-medium">
                        🛍️ Cart
                    </Link>
                    </li>
                    <li>
                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                    >
                        Logout
                    </button>
                    </li>
                </>
                ) : (
                <li>
                    <Link to="/login" className="hover:text-gray-400 font-medium">
                        Login
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar