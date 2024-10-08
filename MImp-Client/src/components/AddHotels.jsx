import React, { useRef } from "react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const addhotels = () => {
  const url = "https://67038440bd7c8c1ccd41bc90.mockapi.io/hotel";
  const ratingsRef = useRef(null);
  const hotelnameRef = useRef(null);
  const hotelimageRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleclick = (e) => {
    e.preventDefault();
    const obj = {
      ratings: ratingsRef.current.value,
      price: priceRef.current.value,
      hotelimg: hotelimageRef.current.value,
      description: descriptionRef.current.value,
      hotelname: hotelnameRef.current.value,
    };
    if (obj) {
      console.log(obj);
      SendData(obj);
    }
  };

  const SendData = async (obj) => {
    const res = await axios.post(url, obj);
    if (res.status === 201) {
      alert("Data sent successfully");
    } else {
      alert("Failed to send data!");
    }
  };

  return (
    <>
      <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
        <div className="h-100 w-[370px] pb-10 flex flex-col justify-center items-center rounded-[30px] shadow-md">
          <div className="w-full flex justify-end align-top">
            <Link to={"/admin"}>
              <CircleX />
            </Link>
          </div>

          <form className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
            <h1 className="text-blue-600 text-2xl font-medium">
              Hotel Details
            </h1>
            <input
              ref={ratingsRef}
              type="number"
              className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
              placeholder="Rating"
              required
            />
            <input
              ref={hotelnameRef}
              type="text"
              className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
              placeholder="Hotel Name"
              required
            />
            <input
              ref={priceRef}
              type="text"
              className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
              placeholder="Price"
              required
            />
            <input
              ref={hotelimageRef}
              type="text"
              className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
              placeholder="Hotel Image Url"
              required
            />
            <input
              ref={descriptionRef}
              type="text"
              className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
              placeholder="Description"
              required
            />
            <button
              type="submit"
              onClick={handleclick}
              className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addhotels;
