import React, { useState } from "react";
import { Heart, Star, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const Admin = true;

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    const url = `https://6703ae46ab8a8f89273132cf.mockapi.io/AddCity/${id}`;
    try {
      const Del = await axios.delete(url);
      alert(`Deleted! Status: ${Del.status}`);
      // window.location.reload();
    } catch (e) {
      alert('Error deleting the item.');
    }
  };

  const handleCardClick = () => {
    navigate(`/city/`, { state: { data: props.data } });
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full max-w-[300px] h-[350px] border rounded-lg overflow-hidden flex-shrink-0 bg-[#f8f8f8] cursor-pointer m-2"
    >
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
        <div className="text-black font-bold text-lg">{props.data.cityname}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-black text-xl font-semibold">
            ₹ {props.data.price}
          </div>

          {props.admin ? (
            <Trash2
              onClick={(e) => handleDelete(props.data.id, e)}
              className="w-6 h-6 rounded-full cursor-pointer bg-[#D9D9D9]"
            />
          ) : (
            <Heart
              onClick={handleHeartClick}
              className={`w-6 h-6 rounded-full cursor-pointer ${
                isLiked ? "bg-red-500" : "bg-[#D9D9D9]"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
