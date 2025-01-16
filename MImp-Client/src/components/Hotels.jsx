import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { getHotels } from "../services/HotelAndPlacesCRUD";
import axios from "axios";

const Hotels = (props) => {
  const [hotels, setHotels] = useState([]);
  // console.log(props.id);
  const FetchData = async () => {
    try {
      const res = await getHotels(props.id);
      if (res.status === 200 || res.status === 201) {
        // console.log(res.data);
        setHotels(res.data.data);
      } else {
        alert("Error! Data not fetched");
      }
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className="text-3xl bg-lime-100 shadow-md w-full flex justify-center h-[3rem] items-center">
          Hotels
        </h1>
      </div>
      <div className="w-full h-full flex justify-center flex-wrap gap-5">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel._id}
            img={hotel.hotelImgUrl}
            name={hotel.Name}
            price={hotel.Price}
          />
        ))}
      </div>
    </>
  );
};

export default Hotels;
