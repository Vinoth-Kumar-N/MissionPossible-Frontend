import React from 'react'
import { CircleX } from 'lucide-react';
import {Link} from 'react-router-dom'
const AddCity = () => {
  return (
    <>
    <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
    <div className="h-100 w-[370px] pb-10 flex flex-col justify-center items-center rounded-[30px] shadow-md">
      <div className="w-full flex justify-end align-top">
        <Link to={'/'}><CircleX /></Link>
      </div>

      <form className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
        <h1 className="text-blue-600 text-2xl font-medium">City Details</h1>
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Image URL" required />
        <input type="number" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Rating" required />
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="City Name" required />
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Price" required />
        <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600">Add</button>
    </form>
    </div>
  </div>
  </>
  )
}

export default AddCity