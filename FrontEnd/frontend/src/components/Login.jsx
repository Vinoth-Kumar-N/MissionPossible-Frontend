import React from 'react'
import Google from '../assets/img/google.png'
const Login = () => {
  return (
    <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
      <div className="h-100 w-[30%] pb-5 flex flex-col justify-center items-center bg-white rounded-[30px] shadow-md">
        <div className="w-full flex justify-end align-top"></div>
        <form action="#" className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
          <h1 className="text-blue-600 font-serif text-2xl font-medium">Login Form</h1>
          <input type="email" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Email" />
          <input type="password" className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="password" />
          <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600" >Login</button>
          <button type="submit" className="h-12 bg-slate-50 rounded-full w-[80%] p-2 font-serif flex justify-center gap-4 items-center" ><img src={Google}/> Continue with Google</button>
        </form>
      </div>
    </div>
  )
}

export default Login