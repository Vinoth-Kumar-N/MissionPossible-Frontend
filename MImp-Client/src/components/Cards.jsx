import React, { useEffect, useState } from "react";
import Featurescard from "./Featurescard";
import axios from "axios";

const Cards = () => {
  const url = import.meta.env.VITE_ADD_FEATURES;
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
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="w-full h-[500px] flex flex-row gap-4 overflow-x-auto overflow-y-hidden p-5 m-5">
      {data.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-[300px]">
          <Featurescard data={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
