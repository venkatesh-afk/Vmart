import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCategoryCard = ({imageUrl, title}) => {

  const navigate = useNavigate();

  const handleShopNow = () => {
    const categorySlug = title.toLowerCase().replace(/ /g,"-");
      navigate(`/products/${categorySlug}`)
  }

  return (
    <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:shadow-xl transition-shadow duration-300 mt-10">
        <div className="w-full h-60 overflow-hidden bg-slate-100 p-2">
            <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
        </div>

        <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200" onClick={handleShopNow}>
            Shop Now
            </button>
        </div>
    </div>

  )
}

export default ProductCategoryCard