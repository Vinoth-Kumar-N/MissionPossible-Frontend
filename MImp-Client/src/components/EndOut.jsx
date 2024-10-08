import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const EndOut = () => {
    const [citData, setCitData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCities = citData.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.price.toString().includes(searchTerm)
    );

    return (
        <div>
            <form class="form relative">
                <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                        class="w-5 h-5 text-gray-700"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            stroke-width="1.333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
                <input
                    class="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md m-[1%]"
                    placeholder="Search..."
                    required=""
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </form>
            <div className="flex flex-wrap">
                {filteredCities.map((city) => (
                    <Card key={city.id} city={city.name} price={city.price} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" />
                ))}
                <Card className="w-full m-[1%] sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" />
                <Card className="w-full m-[1%] sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" />
                <Card className="w-full m-[1%] sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" />
            </div>
        </div>
    );
};

export default EndOut;
