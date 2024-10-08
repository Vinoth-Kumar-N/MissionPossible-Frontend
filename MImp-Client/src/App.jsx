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
import EndOut from './components/EndOut';
import Trip from './components/Trip'
import City from './components/City';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddHotels from './components/AddHotels';
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
        <Route path='/city' element={<City />} />
        <Route path='/endoutput' element={<EndOut />} />
        <Route path='*' element={<Error />}/>
        <Route path='/addhotels' element={<AddHotels/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
