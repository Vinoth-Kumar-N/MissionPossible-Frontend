import React from 'react'
import HotelCard from './HotelCard'
const Hotels = () => {
  return (
    <>
    <div className="w-full flex justify-center">
<h1 className='text-3xl'>Hotels</h1>
</div>
    <div className="w-full h-full flex justify-center flex-wrap gap-5">
    
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
    </div>
    </>
  )
}

export default Hotels