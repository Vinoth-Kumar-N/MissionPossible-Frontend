import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import { Loader } from 'lucide-react';

const EndOut = () => {
    const url = 'https://6703ae46ab8a8f89273132cf.mockapi.io/AddCity';
    const location = useLocation();
    const { admin } = location.state || {};

    useEffect(() => {
        if (admin !== undefined) {
            // alert(`Admin status: ${admin}`);
        }
    }, [admin]);

    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const FetchData = async () => {
        try {
            const res = await axios.get(url);
            if (res.status === 200) {
                setData(res.data);
                console.table(res.data);
            } else {
                alert("Error! Data not fetched");
            }
        } catch (error) {
            alert("Error occurred: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = Data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {
                Loading ? (
                    <div className='w-screen h-screen flex justify-center items-center'>
                        <Loader className="animate-spin" />
                    </div>
                ) : (
                    <div className="p-4">
                        <form className="flex items-center rounded-full border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md mb-4">
                            <button type="submit">
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
                                value={searchTerm}
                                onChange={handleSearch}
                                className="flex-grow rounded-l-full px-4 py-2"
                            />
                            <button type="reset" onClick={() => setSearchTerm('')}>
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
                        <div className="flex flex-wrap justify-center">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <Card
                                        key={item.id}
                                        className="w-full m-2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                                        data={item}
                                        admin={admin}
                                    />
                                ))
                            ) : (
                                <p>No data available</p>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default EndOut;
