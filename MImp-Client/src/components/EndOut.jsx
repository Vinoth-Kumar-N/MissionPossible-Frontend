import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const EndOut = () => {
    const url = 'https://6703ae46ab8a8f89273132cf.mockapi.io/AddCity';
    
    const [Data, setData] = useState([]);

    const FetchData = async () => {
        try {
            const res = await axios.get(url);
            alert(res.status);
            if (res.status === 200) {
                alert("Data Fetched Successfully");
                setData(res.data);
                console.table(res.data);
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
        <div>
            <form className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md m-[1%]">
                <button>
                    <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                        className="w-5 h-5 text-gray-700"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            strokeWidth="1.333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <input
                    placeholder="Search..."
                    required=""
                    type="text"   
                />
                <button type="reset">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </form>
            <div className="flex flex-wrap">
                {Data && Data.length > 0 ? (
                    Data.map((item) => (
                        <Card
                            key={item.id}
                            className="w-full m-[1%] sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                            data={item}
                        />
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default EndOut;
