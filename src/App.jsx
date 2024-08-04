import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Products from './routes/Products/Products.jsx';
import './App.css'
import Admin from './components/Admin/Admin.jsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products/>} />
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  );
};

export default App;
