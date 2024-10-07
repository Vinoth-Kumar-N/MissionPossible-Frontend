import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EndOut = () => {
    const [citData, setCitData] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await axios.get('https://6703eb09ab8a8f8927322fe3.mockapi.io/cities');
            console.log(res.data);
            setCitData(res.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <div className="h-[96vh] w-full">
                <div className="w-[90vw] flex items-center justify-center">
                    {citData.map((item, index) => (
                        <div key={index} className="">
                            <h2 className="text-3xl font-bold">{item.name}</h2>

                            <h2 className="text-xl font-bold mt-8">Hotels to stay</h2>
                            <div className="hotel-list h-auto grid grid-cols-3 gap-6 m-6">
                                {item.Hotels.map((hotel, hotelIndex) => (
                                    <div key={hotelIndex} className="hotel-item">
                                        <img src={hotel} alt="Hotel" className="hotel-image w-[22rem] h-[22rem] bg-cover" />
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-xl font-bold mt-9">Places to visit</h2>
                            <div className="place-list h-auto grid grid-cols-3 gap-6 m-6">
                                {item.places.map((place, placeIndex) => (
                                    <div key={placeIndex} className="hotel-item">
                                        <img src={place} alt="Hotel" className="hotel-image w-[22rem] h-[22rem] bg-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EndOut;