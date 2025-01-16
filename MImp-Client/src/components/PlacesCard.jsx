import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPlaces } from "../services/HotelAndPlacesCRUD";

const PlacesCard = (props) => {
  const [placeslist, setplaceslist] = useState([]);
  console.log(props.id);
  const FetchData = async () => {
    try {
      const res = await getPlaces(props.id);
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        setplaceslist(res.data.data);
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
    <div className="w-screen">
      <ul className="flex flex-wrap justify-center">
        {placeslist.map((item, index) => (
          <li key={index} className="m-[1%] flex">
            <div className="shadow-md h-auto w-[300px] flex flex-col rounded-2xl bg-slate-100">
              <img
                className="w-auto h-[50%] rounded-lg m-2"
                src={item.placeImgUrl}
                alt="project"
              />
              <div className="p-4 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{item.placeName}</h1>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesCard;
