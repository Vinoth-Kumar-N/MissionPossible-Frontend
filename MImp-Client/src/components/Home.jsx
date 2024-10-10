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
            <div className="mt-4 w-[7rem] h-[3rem] bg-black text-white rounded-md flex justify-center items-center">
              <Link to={"/register"} className="">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <Cards />
        <div className="w-screen">
          <div className="flex justify-center items-center">
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
