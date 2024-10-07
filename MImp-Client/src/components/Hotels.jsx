import React from 'react'
import HotelCard from './HotelCard'
const Hotels = () => {
  return (
    <>
    Hotels
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