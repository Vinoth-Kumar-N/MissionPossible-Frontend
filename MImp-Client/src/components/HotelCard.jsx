import React from "react";

const HotelCard = ({ name, img, price }) => {
  return (
    <div className="h-[300px] w-[300px] shadow-md bg-slate-300 rounded-md flex flex-col gap-2 p-3 justify-center">
      <div className="h-[50%] w-full rounded-md">
        <img
          src={img}
          alt={name}
          className="h-full w-full rounded-md bg-slate-50"
        />
      </div>
      <div className="h-[20%] w-full rounded-md flex items-center justify-center bg-slate-50">
        {name}
      </div>
      <div className="h-[20%] w-full rounded-md flex items-center justify-center bg-slate-50">
        {price}
      </div>
    </div>
  );
};

export default HotelCard;
