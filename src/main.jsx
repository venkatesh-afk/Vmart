import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ProductProvider from './context/ProductProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import Index from './pages/Index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Index />}></Route>
            <Route path="/vmart" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:category" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductProvider>  
    </AuthProvider>
  </BrowserRouter>
)
