import React from "react";

const HotelCard = () => {
  return (
    <div className="h-[300px] w-[300px] shadow-md rounded-md bg-slate-300 flex flex-col gap-2 p-3 justify-center">
      <div className="h-[50%] w-full bg-slate-400 rounded-md">img</div>
      <div className="h-[20%] w-full bg-slate-400 rounded-md">Hotel Name</div>
      <div className="h-[20%] w-full bg-slate-400 rounded-md">Price</div>
    </div>
  );
};

export default HotelCard;
