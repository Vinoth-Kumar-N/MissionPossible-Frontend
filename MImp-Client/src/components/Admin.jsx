import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/endoutput', { state: { admin: true } });
  };

  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div>
          <p className="text-3xl font-mono text-white">Welcome, Admin😊</p>
        </div>
        <div className="container w-full h-[90vh] flex justify-center items-center">
          <div className="Link flex">
            <Link to={"/addfeature"}>
              <span className="box">Feature</span>
            </Link>
            <Link to={"/addcity"}>
              <span className="box">Add City</span>
            </Link>
            <Link to={"/addhotels"}>
              <span className="box">Add Hotels</span>
            </Link>
            <div onClick={handleCardClick}>
              <span className="box">View City</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
