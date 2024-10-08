import React from "react";
import CityDetails from "./CityDetails";
import Hotels from "./Hotels";
import Weather from "./Weather";
import Map from "./Map";
import Air from "./Air";
import Currency from "./Currency";
import PlacesCard from "./PlacesCard";
const City = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-2">
        <Weather />
        <CityDetails />
        <Map lat={13.08268} lng={80.270721} />
        <Air />
        <Hotels />
        <h1 className="text-2xl flex justify-center items-center rounded-md shadow-md bg-lime-100 h-[50px]">
          Places
        </h1>
        <PlacesCard />
        <div className="justify-center items-center flex">
          <button className="box">Purchase</button>
        </div>
        <Currency />
      </div>
    </>
  );
};
2;

export default City;
