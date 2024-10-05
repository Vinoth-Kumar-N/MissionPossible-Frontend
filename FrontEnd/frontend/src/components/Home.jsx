import React from 'react'
import { LucideStarHalf, Star } from 'lucide-react'
import Cards from './Cards'
import { ArrowRight } from 'lucide-react'
const Home = () => {
   return (
      <>
         <div className='w-screen h-screen z-0 mt-[-1%]'>
            <div className='w-[100%] h-[70vh] bg-[url("../assets/img/imagebg.jpg")] bg-cover bg-no-repeat  flex flex-col items-center font-bold'>
               <div className='text-3xl mt-[5%]'> Tamil Nadu's Best</div>
               <div className='text-3xl'>Travel Itinerary Planner</div>
               <div className='flex space-x-1 mt-[5%]'>
                  <div className='flex space-x-1'><Star color='orange' fill='orange' /><Star color='orange' fill='orange' /><Star color='orange' fill='orange' /><Star color='orange' fill='orange' /><LucideStarHalf color='orange' fill='orange' /></div>
                  <div className='font-bold'>4.5 + Ratings</div>
               </div>
            </div>
            <Cards />
            <div className='w-screen flex justify-center'>
               <div className=' bg-slate-400 flex w-[150px] flex justify-center rounded-lg h-8'>
                  <button className='text-black'>View More</button><ArrowRight className='text-black' />
               </div>
            </div>
         </div>
      </>
   )
}

export default Home