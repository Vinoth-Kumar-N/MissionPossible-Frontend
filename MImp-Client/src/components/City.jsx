import React from 'react'
import CityDetails from './CityDetails'
import Hotels from './Hotels'
import Weather from './Weather'
// import PlacesCard from './PlacesCard'
const City = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-2">
        <Weather/>
        <CityDetails />
        <Hotels />
      </div>
      {/* <PlacesCard/> */}
    </>
  )
}

export default City