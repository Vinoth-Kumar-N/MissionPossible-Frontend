import React from 'react';
import Login from './pages/Login';
import AdminLogin from './components/AdminLogin';
import Admin from './components/Admin'
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import AddFeature from './components/AddFeature';
import AddCity from './components/AddCity';
import EndOut from './components/EndOut';
import Trip from './components/Contact'
import City from './components/City';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddHotels from './components/AddHotels';
import Layout from './Layout/Layout';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contact' element={<Trip />}></Route>
          <Route path='/endoutput' element={<EndOut />} />
        </Route>


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/addfeature' element={<AddFeature />} />
        <Route path='/addcity' element={<AddCity />} />
        <Route path='/city' element={<City />} />

        <Route path='*' element={<Error />} />
        <Route path='/addhotels' element={<AddHotels />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
