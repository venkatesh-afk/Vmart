import React from 'react'

const ProductCard = ({product, addToCart}) => {
  return (
    <div className="shadow-md shadow-gray-700 w-72 m-4 flex flex-col items-center p-4 mt-8 rounded-xl">
      <div className="w-full h-60 overflow-hidden">
        <img src={product.image}
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <h4 className="text-lg font-bold">Rs. {product.price}</h4>
      <p className="mt-1">{product.ratings}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white w-full rounded-xl p-3 mt-3 hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard