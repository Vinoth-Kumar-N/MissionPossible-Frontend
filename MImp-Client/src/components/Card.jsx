import React, { useState } from "react";
import { Heart, Star } from "lucide-react";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };
  console.table(props.data);
  return (
    <div className="w-[300px] h-[350px] border rounded-lg overflow-hidden flex-shrink-0 bg-[#f8f8f8]">
      <div className="relative">
        <img
          src={props.data.coverimg}
          alt="images"
          className="w-full h-[200px] object-cover"
        />
        <div className="bg-white bg-opacity-70 absolute bottom-3 left-2 px-2 py-1 rounded flex">
          <p className="text-black text-sm font-semibold flex space-x-1">
            <Star color="orange" size={16} /> {props.data.ratings}
          </p>
        </div>
      </div>

      <div className="p-3">
        <div className="text-black font-bold text-lg">{props.data.cityimg}</div>

        <div className="flex justify-between items-center mt-2">
          <div className="text-black text-xl font-semibold">₹ {props.data.price}</div>
          <Heart
            onClick={handleHeartClick}
            color={isLiked ? "white" : "black"}
            className={`w-6 h-6 rounded-full ${
              isLiked ? "bg-red-500" : "bg-[#D9D9D9]"
            } p-1 cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
