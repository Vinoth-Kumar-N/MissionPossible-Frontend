import React, { useEffect, useState } from "react";
import Featurescard from "./Featurescard";
import axios from "axios";

const Cards = () => {
  const url = "https://6703ae46ab8a8f89273132cf.mockapi.io/AddFeatures";
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        setData(res.data);
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
    <div className="w-full flex flex-row gap-4 overflow-x-scroll">
      {data.map((item, index) => (
        <div key={index} className="min-w-[300px] h-[200px] border rounded-md shadow-md p-4 bg-white">
          <Featurescard data={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
