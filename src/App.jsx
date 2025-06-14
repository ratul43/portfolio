import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';
import AdminPanel from './components/DashBoard/AdminPanel';
import AdminBlog from './components/DashBoard/BlogAdmin';
import BlogAdmin from './components/DashBoard/BlogAdmin';
import TeamAdmin from './components/DashBoard/TeamAdmin';
import ServiceAdmin from './components/DashBoard/ServiceAdmin';
import AdminDashboard from './components/DashBoard/AdminDashBoard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Blog' element={<BlogPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Service' element={<ServicePage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/test' element={<TestPage/>}/>

    {/* Admin Panel Routes  */}
    <Route path="/admin" element= {<AdminPanel/>}>
    <Route index element={<AdminDashboard />} />
<Route path="blog" element={<BlogAdmin/>} />
<Route path="team" element={<TeamAdmin/>} />
<Route path="service" element={<ServiceAdmin/>} />


    </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;