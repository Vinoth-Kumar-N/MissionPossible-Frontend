import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/endoutput', { state: { admin: true } });
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 border border-white border-opacity-30">
        <p className="text-4xl font-semibold text-white text-center mb-8">Welcome, Admin😊</p>
        <div className="flex flex-col md:flex-row justify-center mb-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <Link to={"/addfeature"}>
              <span className="box rounded-lg p-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Feature</span>
            </Link>
            <Link to={"/addcity"}>
              <span className="box rounded-lg p-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Add City</span>
            </Link>
            <Link to={"/addhotels"}>
              <span className="box rounded-lg p-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Add Hotels</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div onClick={handleCardClick}>
            <span className="box rounded-lg p-4 bg-green-600 text-white hover:bg-green-700 transition duration-300">View City</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
