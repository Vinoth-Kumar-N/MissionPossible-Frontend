import React from 'react'
import InfoPage from './InfoPage'
const Weather = () => {
  return (
    <>
    <div className="h-auto w-full mt-10 flex">
    <div className="w-1/2 flex justify-center">
    <InfoPage name={'coimbatore'}/>
    </div>
    <div className="w-1/2 flex flex-col justify-center items-center">
        <p className='text-3xl'>Coimbatore</p>
        <p className='text-3xl'>Tamil Nadu , India</p>
    </div>
    </div>
    </>
  )
}

export default Weather