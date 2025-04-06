import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';
import ProductPage from './Components/ProductPage'
import OrderPage from './Components/OrderPage';

export default function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/product/:productId' element={<OrderPage />}/>
      </Routes>
  );
}
