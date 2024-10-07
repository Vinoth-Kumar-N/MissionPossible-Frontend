import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin'
import Error from './components/Error';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
