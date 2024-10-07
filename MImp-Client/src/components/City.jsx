import React from "react";
import CityDetails from "./CityDetails";
import Hotels from "./Hotels";
import Weather from "./Weather";
import Map from './Map'
import  Currency  from './Currency'
// import PlacesCard from './PlacesCard'
const City = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-2">
        <Weather />
        <CityDetails />
        <Map lat={13.082680} lng={80.270721}/>
        <Hotels />
        <div className="justify-center items-center flex">
        <button className="bg-black  text-white w-[20%] h-[20%] rounded-lg">Purchase</button>
        </div>
        <div className="w-screen">
          <p>want to convert currency?</p>
          <div className="flex justify-start"><Currency/></div>
        </div>
      </div>
    </>
  );
};

export default City;
