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
      <div className="w-screen h-screen z-0 mt-[-1%]">
        <div className='w-[100%] h-[92vh] bg-[url("../assets/img/home.png")] bg-cover bg-no-repeat'>
          <div className="w-[100%] h-[92vh] flex flex-col items-center font-bold backdrop-blur-sm">
            <div className="text-3xl mt-[5%] text-blue-700">
              {" "}
              Tamil Nadu&apos;s Best
            </div>
            <div className="text-3xl text-blue-700">
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
            <div className=" mt-8 flex flex-col justify-center items-center text-center">
              <p className="text-[3rem] text-red-500 font-bold">
                Discover your Next Adventure with Us
              </p>
              <p className="text-[3rem] text-black font-bold">
                Itineraries at your Fingertips
              </p>
              <p className="text-[16px] text-[#3d4dad]">
                Your personal trip planner and travel curator, creating
                otineraries tailored to your interest
              </p>
            </div>
            <div className="mt-4">
              <a href="/register" className="">
                <button className="w-[7rem] h-[3rem] bg-black text-white rounded-md">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <Cards />
        <div className="w-screen">
          <div className="flex justify-center items-center">
            <div className="flex">
              <Link to={"/trip"}>
                <button className="text-white text-lg bg-blue-500 pl-5 pr-5 pt-3 pb-3 rounded-lg flex">
                  View More
                  <ArrowRight className="pl-1 text-white text-lg" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
