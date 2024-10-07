import React from 'react'
import CityDetails from './CityDetails'
import Hotels from './Hotels'
import InfoPage from './InfoPage'
// import PlacesCard from './PlacesCard'
const City = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
    <div>

    </div>
    <InfoPage name={'coimbatore'}/>
    <CityDetails/>
    <Hotels/>
    </div>
    {/* <PlacesCard/> */}
    </>
  )
}

export default City