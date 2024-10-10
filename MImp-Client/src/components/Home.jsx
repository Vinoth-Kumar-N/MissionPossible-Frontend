import React from "react";
import { LucideStarHalf, Star } from "lucide-react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen z-0 mt-[-1%]">
        <div className="w-[100%] h-[92vh] bg-[url('../assets/img/home.png')] bg-cover bg-no-repeat bg-green-900">
          <div className="w-[100%] h-[92vh] flex flex-col items-center font-bold backdrop-blur-sm bg-black/40">
            <div className="text-3xl mt-[5%] text-white">
              Tamil Nadu&apos;s Best
            </div>
            <div className="text-3xl text-white">Travel Itinerary Planner</div>
            <div className="flex space-x-1 mt-[5%]">
              <div className="flex space-x-1">
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <Star color="orange" fill="orange" />
                <LucideStarHalf color="orange" fill="orange" />
              </div>
              <div className="font-bold text-white">4.5 + Ratings</div>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center text-center">
              <p className="text-[3rem] text-yellow-300 font-bold">
                Discover your Next Adventure with Us
              </p>
              <p className="text-[3rem] text-white font-bold">
                Itineraries at your Fingertips
              </p>
              <p className="text-[16px] text-[#e0e3fc]">
                Your personal trip planner and travel curator, creating
                itineraries tailored to your interest
              </p>
            </div>
            <div className="mt-4 w-[8rem] h-[3rem] bg-yellow-500 text-white rounded-md flex justify-center items-center">
              <Link to={"/register"}>Get Started</Link>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-700">
            Happy Clients' Reviews
          </h2>
        </div>

        <div className="w-full h-[50vh] overflow-x-scroll p-10 space-x-4 flex">
          <Cards />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
