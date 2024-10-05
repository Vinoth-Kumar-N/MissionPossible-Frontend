import React from 'react'
import { Card } from './Card'

export const Cards = () => {
  return (
    <>
      <div className='w-screen h-[350px] border overflow-x-auto flex space-x-4 p-4'>
        <div className='flex space-x-4'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Cards
