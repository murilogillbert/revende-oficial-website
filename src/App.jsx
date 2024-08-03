import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Products from './routes/Products/Products.jsx';
import './App.css'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products/>} />
    </Routes>
  );
};

export default App;
