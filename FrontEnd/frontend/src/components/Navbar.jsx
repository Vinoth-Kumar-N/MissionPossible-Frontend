import React from 'react'
import {User2} from 'lucide-react'
export const Navbar = () => {
  return (
    <div className='w-screen h-auto bg-[#657cba] flex  text-white justify-between rounded-lg'>
        <div className='flex m-3'>
            <p>Trip Planner</p>
        </div>
        <div className='flex m-3 space-x-3'>
            <ul className='flex space-x-3'>
                <li className='hover:underline'>For booking</li>
                <li className='hover:underline'>About us</li>
                <li className='hover:underline'>Contact</li>
            </ul>
            <div className='w-8 h-8 rounded-full bg-orange-500 justify-center items-center flex'>
            <User2 className='rounded-full  '/>
            </div>
        </div>
    </div>
  )
}

export default Navbar