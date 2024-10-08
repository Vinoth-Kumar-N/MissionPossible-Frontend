import React from "react";
import { LucideStarHalf, Star } from "lucide-react";
import Cards from "./Cards";
import Map from "./Map";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InfoPage from "./InfoPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen z-0 mt-[-1%] flex flex-col">
        {/* Hero Section */}
        <div className='w-[100%] h-[92vh] bg-[url("../assets/img/home.png")] bg-cover bg-no-repeat'>
          <div className="w-[100%] h-[92vh] flex flex-col items-center font-bold backdrop-blur-sm px-4 sm:px-8 lg:px-16">
            <div className="text-2xl sm:text-3xl mt-[5%] text-blue-700 text-center">
              Tamil Nadu's Best
            </div>
            <div className="text-2xl sm:text-3xl text-blue-700 text-center">
              Travel Itinerary Planner
            </div>
            <div className="flex space-x-1 mt-[5%]">
              <div className="flex space-x-1">
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <LucideStarHalf color="orange" fill="orange" />
              </div>
              <div className="font-bold text-blue-700">4.5 + Ratings</div>
            </div>
            <div className=" mt-8 flex flex-col justify-center items-center gap-6 w-[80%] text-center">
              <p className="text-[2rem] sm:text-[3rem] text-red-500 font-bold">
                Discover your Next Adventure with Us
              </p>
              <p className="text-[2rem] sm:text-[3rem] text-black font-bold">
                Itineraries at your Fingertips
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#3d4dad]">
                Your personal trip planner and travel curator, creating
                itineraries tailored to your interest
              </p>
            </div>
            <div className="mt-4">
              <button className="w-[7rem] h-[3rem] bg-black text-white rounded-md">
                <a href="/register">Get Started</a>
              </button>
            </div>
          </div>
        </div>

        {/* InfoPage Section */}
        <div className="flex">
          <InfoPage name={"erode"} />
        </div>

        {/* Cards Section */}
        <Cards />

        {/* Map Section */}
        <Map lat={13.08268} lng={80.270721} />

        {/* View More Button */}
        <div className="w-screen h-auto flex flex-wrap justify-center py-4">
          <div className="bg-slate-400 flex w-[150px] justify-center rounded-lg h-8">
            <Link to={"/trip"}>
              <button className="text-black">View More</button>
              <ArrowRight className="text-black" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
