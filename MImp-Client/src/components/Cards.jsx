import React from "react";
import Featurescard from "./Featurescard";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="w-screen h-auto border p-4">
        <p className="font-bold text-3xl flex p-4 justify-center">
          Our Happy Clients
        </p>
        <div className="h-full w-full flex content-between gap-4  justify-center flex-wrap">
          <Featurescard />
          <Featurescard />
          <Featurescard />
          <Featurescard />
          <Featurescard />
        </div>
      </div>
    </>
  );
};

export default Cards;
