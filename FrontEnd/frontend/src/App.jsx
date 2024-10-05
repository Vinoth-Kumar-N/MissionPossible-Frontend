import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import {Home} from './components/Home'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
export const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App