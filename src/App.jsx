import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/test' element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;