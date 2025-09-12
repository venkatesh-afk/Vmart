import React from 'react'
import ProductCategoryCard from './components/ProductCategoryCard'

const ProductCategory = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-5">
        Explore Our Wide Range of Categories
      </h1>        
      <div>
            <div className='flex flex-wrap px-10 justify-between'>
                <ProductCategoryCard 
                    imageUrl="/assets/Electronics/Iphone.png"
                    title="Mobiles"
                />
                <ProductCategoryCard 
                    imageUrl="/assets/Electronics/Fridge.png"
                    title="Home Accessories"
                />
                <ProductCategoryCard 
                    imageUrl="/assets/Electronics/Sony WH-1000XM5.avif"
                    title="Electronics"
                />
                    <ProductCategoryCard 
                    imageUrl="/assets/Sports/Nike.png"
                    title="Sports"
                />
                <ProductCategoryCard 
                    imageUrl="/assets/Fashion/Mens/BlackShirt.png"
                    title="Men's Fashion"
                />
                <ProductCategoryCard 
                    imageUrl="/assets/Fashion/Women/Womens.jpg"
                    title="Women's Fashion"
                />
                <ProductCategoryCard 
                    imageUrl="/assets/accessories/necklace.png"
                    title="Accessories"
                />                
                <ProductCategoryCard 
                    imageUrl="/assets/skinCare/SkinProducts.png"
                    title="Skin Care"
                />
            </div>
        </div>
    </div>
  )
}

export default ProductCategory