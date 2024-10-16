import React from "react";
import CityDetails from "./CityDetails";
import Hotels from "./Hotels";
import Weather from "./Weather";
import Map from "./Map";
import Air from "./Air";
import Currency from "./Currency";
import PlacesCard from "./PlacesCard";
import { useLocation } from "react-router-dom";
const City = (props) => {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <>
      <div className="flex flex-col gap-10 p-2">
        <Weather name={data.cityname}/>
        <CityDetails data={data} />
        <Map lat={Number(data.lat)} lng={Number(data.lon)} />
        <Hotels />
        <h1 className="text-2xl flex justify-center items-center rounded-md shadow-md bg-lime-100 h-[50px]">
          Places
        </h1>
        <PlacesCard />
        <div className="justify-center items-center flex">
          <button className="box">Purchase</button>
        </div>
        <Air name={data.cityname}/>
        <Currency />
      </div>
    </>
  );
};
2;

export default City;
