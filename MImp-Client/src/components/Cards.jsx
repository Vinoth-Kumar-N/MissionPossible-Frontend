import React from 'react'
import Featurescard from './Featurescard'
import Card from './Card'

const Cards = () => {
  return (
    <>
      <div className='w-screen h-auto border p-4 bg-slate-200'>
        <p className="font-bold text-2xl">Our Happy Clients</p>
        <div className='h-full w-full flex content-between gap-4  justify-center flex-wrap'>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
        </div>
      </div>
    </>
  )
}

export default Cards
