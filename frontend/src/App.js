import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import ContactUs from './component/ContactUs/ContactUs';
import './App.css';
import Buildings from './component/Buildings/Buildings';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Pictures from './component/pictures/pictures';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='contactUs' element={<ContactUs />} />
            <Route path='buildings' element={<Buildings />} />
            <Route path='/pictures' element={<Pictures />} />
            <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
