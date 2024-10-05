import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-screen h-auto bg-black flex  text-white justify-between'>
        <div className='flex m-3'>
            <p>Trip Planner</p>
        </div>
        <div className='flex'>
            <ul className='flex space-x-3 m-3'>
                <li className='hover:underline'>contact</li>
                <li className='hover:underline'>About</li>
                <li className='hover:underline'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar