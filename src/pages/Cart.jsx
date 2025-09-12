import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart,setCart} = useContext(ProductContext)

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_,i) => i !== index)
    setCart(updatedCart)

    const user = localStorage.getItem("loggedInUser");
    if(user){
      localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart))
    }
    toast.success('Item Removed Successfully')
  }

    const total = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <>
      <nav className="flex items-center justify-between bg-black px-10 text-white p-5 shadow-lg">
            <h1 className="text-3xl font-extrabold">VMart</h1>

            <ul className="flex space-x-6 items-center">
                <li>
                <Link to="/vmart" className="hover:text-gray-400 font-medium">
                    Home
                </Link>
                </li>
            </ul>
        </nav>
      <ToastContainer />
      <div className='p-5 px-10'>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-between">
            {cart.map((product, index) => (
              <div
                key={index}
                className="shadow-md shadow-gray-700 w-72 m-4 flex flex-col items-center p-4 mt-8"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <h2 className="mt-2">{product.name}</h2>
                <h4>Rs. {product.price}</h4>
                <p className="mt-1">{product.ratings}</p>
                <button
                  className="bg-red-500 text-white w-full rounded-xl p-3 mt-3"
                  onClick={() => removeFromCart(index)}
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
          <div className='bg-black p-3 rounded-md mt-10 text-white text-center'>
            <h2 className="text-xl font-bold">Total: Rs. {total}</h2>
          </div>
        </>
      )}
    </div>
  </>
  )
}

export default Cart