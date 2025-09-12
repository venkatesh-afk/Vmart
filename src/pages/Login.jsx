import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(email,password)

    if(success){
      navigate("/")
    }else{
      setError(true)
    }
  }
  
  return (
    <div>
      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />

        <button
        onClick={handleLogin}
          className="bg-black text-white p-2 rounded w-full"
        >
          Login
        </button>
        {error && <p className='text-red-500 mt-3'>Invalid Email or Password</p>}
      </div>
      <div className='bg-gray-200 w-1/6 p-5 rounded-md text-justify m-auto '>
        <h2 className='font-bold'>Demo Email and Password</h2>
        <br />
        <h4 className='font-semibold'>User 1</h4>
        <p>Email : user1@example.com</p>
        <p>Password : pass1</p>
        <br />
        <h4 className='font-semibold'>User 2</h4>
        <p>Email : user2@example.com</p>
        <p>Password : pass2</p>
        <br />

        <h4 className='font-semibold'>User 3</h4>
        <p>Email : user3@example.com</p>
        <p>Password : pass3</p>
      </div>
    </div>   
  )
}

export default Login