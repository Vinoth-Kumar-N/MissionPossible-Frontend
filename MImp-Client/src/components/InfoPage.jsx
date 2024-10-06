import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const InfoPage = (props) => {
    const [data, setData] = useState(null);

    const FetchData = async () => {
        try {
            const city = props.name;
            const apiKey = 'be26bcd4947741dd9b980956241409';
            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
            const weatherData = await axios.get(url);
            console.table(weatherData.data);
            setData(weatherData.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-100 backdrop-blur-md">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full">
                {data ? (
                    <>
                        <h2 className="text-xl font-bold text-center mb-2">{data.location.name}</h2>
                        <p className="text-center">{data.location.region}, {data.location.country}</p>
                        <p className="text-center text-gray-600 mb-4">Local Time: {data.location.localtime}</p>
                        <img src={data.current.condition.icon} alt="Weather icon" className="mx-auto w-16 mb-2" />
                        <p className="text-center font-semibold">{data.current.condition.text}</p>
                        <p className="text-center text-lg text-orange-600">Temperature: {data.current.temp_c}°C</p>
                    </>
                ) : (
                    <p className="text-center">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default InfoPage;
