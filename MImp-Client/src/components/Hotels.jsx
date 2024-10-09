import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import axios from "axios";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://67038440bd7c8c1ccd41bc90.mockapi.io/hotel")
      .then((response) => setHotels(response.data))
      .catch((error) => console.error("Error fetching hotels:", error));
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
            key={hotel.id}
            img={hotel.img}
            name={hotel.name}
            price={hotel.price}
          />
        ))}
      </div>
    </>
  );
};

export default Hotels;
