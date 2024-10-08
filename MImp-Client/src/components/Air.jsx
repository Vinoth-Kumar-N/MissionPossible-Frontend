import axios from "axios";
import React, { useState, useEffect } from "react";

const url =
  "https://api.waqi.info/feed/bengaluru/?token=06d9e59247ee800a9f8bcb8fd56802ca54a41dbc";

const Air = () => {
  const [airData, setAirData] = useState(null);
  const [loading, setLoading] = useState(true);
  const FetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setAirData(res.data);
      setLoading(false);
    } catch (error) {
      alert("Error fetching data");
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  const getAqiColor = (aqi) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-500";
    if (aqi <= 150) return "bg-orange-500";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-500";
    return "bg-red-800";
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!airData || !airData.data || !airData.data.city) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-slate-50 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Air Quality</h1>

      <div className="flex justify-center mb-6">
        <div
          className={`w-40 h-40 shadow-md rounded-full flex items-center justify-center text-white text-xl font-bold ${getAqiColor(
            airData.data.aqi
          )}`}
        >
          <p>{airData.data.aqi}</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Location: {airData.data.city.name}
          </h2>
          <a
            href={airData.data.city.url}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on AQICN
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-lg">
              <strong>AQI:</strong> {airData.data.aqi}
            </p>
            <p>
              <strong>Dominant Pollutant:</strong> {airData.data.dominentpol}
            </p>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg">
              <strong>PM2.5 Level:</strong> {airData.data.iaqi.pm25.v}
            </p>
            <p>
              <strong>PM10 Level:</strong> {airData.data.iaqi.pm10.v}
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-lg">
              <strong>CO Level:</strong> {airData.data.iaqi.co.v}
            </p>
            <p>
              <strong>NO2 Level:</strong> {airData.data.iaqi.no2.v}
            </p>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-lg">
              <strong>O3 Level:</strong> {airData.data.iaqi.o3.v}
            </p>
            <p>
              <strong>Temperature:</strong> {airData.data.iaqi.t.v}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Air;
