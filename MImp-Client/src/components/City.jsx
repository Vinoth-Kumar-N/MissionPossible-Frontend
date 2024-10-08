import React from "react";
import CityDetails from "./CityDetails";
import Hotels from "./Hotels";
import Weather from "./Weather";
import Map from "./Map";
import Currency from "./Currency";
import PlacesCard from "./PlacesCard";
const City = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-2">
        <Weather />
        <CityDetails />
        <Map lat={13.08268} lng={80.270721} />
        <Hotels />
        <div className="text-xl flex justify-center items-center rounded-md bg-lime-100 h-[50px]">
          Places
        </div>
        <PlacesCard />
        <div className="justify-center items-center flex">
          <button className="box">Purchase</button>
        </div>
        <div className="w-screen">
          <div className="flex justify-start items-start">
            <Currency />
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
