import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin'
import Error from './components/Error';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import AddFeature from './components/AddFeature';
import AddCity from './components/AddCity';
import Home1 from './components/Home1'
import Trip from './components/Trip'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/trip' element={<Trip/>}></Route>
        <Route path='/home1' element={<Home1 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/addfeature' element={<AddFeature />} />
        <Route path='/addcity' element={<AddCity />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
