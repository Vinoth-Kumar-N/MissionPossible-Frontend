import React from 'react'
import InfoPage from './InfoPage'
const Weather = (props) => {
  return (
    <>
    <div className="h-auto w-full mt-10 flex">
    <div className="w-1/2 flex justify-center">
    <InfoPage name={props.name}/>
    </div>
    <div className="w-1/2 flex flex-col justify-center items-center">
        <p className='text-3xl'>{props.name}</p>
    </div>
    </div>
    </>
  )
}

export default Weather