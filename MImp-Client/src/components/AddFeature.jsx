import React, { useEffect, useRef } from "react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AddFeature = () => {
  const imgref = useRef(null);
  const dateref = useRef(null);
  const descriptionref = useRef(null);
  const nameref = useRef(null);

  const handleclick = (e) => {
    const url = import.meta.env.VITE_ADD_FEATURES;
    e.preventDefault();
    const obj = {
      imageurl: imgref.current.value,
      date: dateref.current.value,
      description: descriptionref.current.value,
      name: nameref.current.value,
    };
    if (obj) {
      console.log(obj);
      sendData(obj);
    } else {
      console.log("no data");
    }
  };
  const sendData = async (obj) => {
    const respon = await axios.post(url, obj);
    alert(respon.status);
    if (respon.status) {
      alert("Data sent succuessfully");
    } else {
      alert("Sorry!, we are unable to sent data right now..kindly try again");
    }
  };
  return (
    <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
      <div className="h-100 w-[370px] pb-10 flex flex-col justify-center items-center rounded-[30px] shadow-md">
        <Link to={"/admin"} className="w-full flex justify-end align-top">
          <CircleX />
        </Link>
        <form
          className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4"
          onSubmit={handleclick}
        >
          <h1 className="text-blue-600 text-2xl font-medium">Add Feature</h1>
          <input
            ref={imgref}
            type="text"
            className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
            placeholder="Image URL"
            required
          />
          <input
            ref={dateref}
            type="date"
            className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
            placeholder="Date"
            required
          />
          <input
            ref={descriptionref}
            type="text"
            className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
            placeholder="Description"
            required
          />
          <input
            ref={nameref}
            type="text"
            className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner"
            placeholder="Name"
            required
          />
          <button
            type="submit"
            className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFeature;
