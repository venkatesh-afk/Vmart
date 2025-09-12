import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Home = () => {

  const {products, addToCart} = useContext(ProductContext);
  const {category} = useParams();

  const filteredProducts = products.filter((product)=>{
    return product.category.toLowerCase().replace(/ /g,"-") === category
  })

  return (
    <div>
      <Navbar />
      <ToastContainer />
        <div className='p-5 px-10 mt-3'>
            <h1 className='text-2xl font-bold'>
              {category ? (
                `Showing Available ${category.replace(/-/g," ")}`
              ):("All Available Products")}</h1>
            <div className='flex flex-wrap justify-between'>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart}></ProductCard>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home