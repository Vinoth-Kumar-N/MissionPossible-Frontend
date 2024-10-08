import React, { useState, useEffect } from "react";
import axios from "axios";

const PlacesCard = () => {
  const [placeslist, setplaceslist] = useState([]);

  useEffect(() => {
    const url = "https://67038440bd7c8c1ccd41bc90.mockapi.io/places";
    axios
      .get(url)
      .then((response) => {
        setplaceslist(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);

  return (
    <>
      <ul>
        {placeslist.map((item, index) => (
          <li key={index}>
            <div className="w-[30%] shadow-md flex rounded-2xl">
              <img
                className="w-[100%] h-[50%] rounded-2xl"
                src={item.img}
                alt="project"
              />
              <div className="w-[100%] flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{item.placename}</h1>
                <p className="text-lg">{item.Description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlacesCard;
