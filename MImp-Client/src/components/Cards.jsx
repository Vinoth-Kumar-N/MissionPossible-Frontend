import React from 'react'
import Featurescard from './Featurescard'
import Card from './Card'

const Cards = () => {
  return (
    <>
      <div className='w-screen h-auto border flex p-4 bg-slate-200'>
        <div className='h-full w-full flex content-between gap-4  justify-center flex-wrap'>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Cards
