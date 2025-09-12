import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Dashboard from './Components/DashBoard';
import Category from './Components/Category';
import ProductPage from './Components/ProductPage';
import StockLevelsPage from './Components/StockLevelsPage';
import Auth from './Components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/productsPage" element={<ProductPage/>}/>
        <Route path="/stockLevelsPage" element={<StockLevelsPage/>}/>
        <Route path="/auths" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App; 