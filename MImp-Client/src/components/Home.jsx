import React from "react";
import { LucideStarHalf, Star } from "lucide-react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Aero from '../assets/img/aero.gif';

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-green-900 to-blue-900 flex flex-col items-center">

      <img src={Aero} alt="Aero Animation" className="absolute top-0 left-0 w-[50vw] h-[30vh]" />

      <div className="w-full h-[90vh] flex flex-col items-center justify-center bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center font-bold backdrop-blur-md bg-white/20 rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl sm:text-4xl text-white">Tamil Nadu's Best</h1>
          <h2 className="text-3xl sm:text-4xl text-white">Travel Itinerary Planner</h2>
          <div className="flex items-center space-x-1 mt-4">
            <div className="flex space-x-1">
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <Star color="orange" fill="orange" />
              <LucideStarHalf color="orange" fill="orange" />
            </div>
            <span className="font-bold text-white">4.5 + Ratings</span>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <p className="text-2xl sm:text-4xl text-yellow-300 font-bold">
              Discover your Next Adventure with Us
            </p>
            <p className="text-2xl sm:text-4xl text-white font-bold">
              Itineraries at your Fingertips
            </p>
            <p className="text-base sm:text-lg text-[#e0e3fc]">
              Your personal trip planner and travel curator, creating itineraries tailored to your interests.
            </p>
          </div>
          <Link to={"/register"}>
            <div className="mt-4 w-[8rem] h-[3rem] bg-yellow-500 text-white rounded-md flex justify-center items-center hover:bg-yellow-600 transition duration-300 animate-bounce">
              Get Started
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center my-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Happy Clients' Reviews</h2>
      </div>

      <div className="w-full h-full overflow-x-auto p-5 sm:p-10 flex space-x-4">
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
