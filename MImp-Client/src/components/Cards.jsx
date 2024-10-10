import React, { useEffect, useState } from "react";
import Featurescard from "./Featurescard";
import axios from "axios";

const Cards = () => {
  const url = 'https://6703ae46ab8a8f89273132cf.mockapi.io/AddFeatures';
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        setData(res.data); 
        console.table(res.data);
      } else {
        alert("Failed...");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data.");
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="w-screen h-auto border p-4">
      <p className="font-bold text-3xl flex p-4 justify-center">
        Our Happy Clients
      </p>
      <div className="h-full w-full flex content-between gap-4 justify-center flex-wrap">
        {data.map((item, index) => (
          <Featurescard key={index} data={item} /> 
        ))}
      </div>
    </div>
  );
};

export default Cards;
