import React from 'react'
import { CircleX } from 'lucide-react';
import {Link} from 'react-router-dom';
const AddFeature = () => {
  return (
    <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
    <div className="h-100 w-[370px] pb-10 flex flex-col justify-center items-center rounded-[30px] shadow-md">
      <Link to={'/'} className="w-full flex justify-end align-top">
        <CircleX />
      </Link>

      <form className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
        <h1 className="text-blue-600 text-2xl font-medium">Add Feature</h1>
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Image URL" required />
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Title" required />
        <input type="date" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Date" required />
        <input type="text" className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Description" required />
        <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600">Add</button>
    </form>
    </div>
  </div>
  )
}

export default AddFeature