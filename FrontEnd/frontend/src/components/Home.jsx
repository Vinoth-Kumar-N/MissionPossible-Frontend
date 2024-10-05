import React from 'react'
import {Star} from 'lucide-react'
export const Home = () => {
  return (
    <>
       <div className='w-screen h-screen text-white'>
          <div className='w-screen h-[50%] bg-[#D9D9D9] backdrop-blur-lg flex flex-col items-center font-bold mt-3'>
           <div className='text-3xl mt-2'> Tamil Nadu's Best</div>
             <div className='text-3xl'>Travel Itinerary Planner</div>
             <div className='flex space-x-1'>
                <div className='flex space-x-1'><Star color='orange' /><Star color='orange'/><Star color='orange'/><Star color='orange'/><Star color='orange'/></div>
                <div className='font-bold'>4.5 + Ratings</div>
             </div>
          </div>
       </div>
    </>
  )
}

export default Home