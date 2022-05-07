import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Cart from './components/Cart';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
     <Route index element={<Home/>}/>
     <Route path='/product/:id' element={<ProductPage/>}/>
     <Route path='/products/category/:name' element={<CategoryPage/>}/>
     <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
