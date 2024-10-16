import React from "react";
import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Featurescard = (props) => {
  return (
    <div className="w-full h-auto rounded-xl bg-[#e8eefc] text-black flex flex-col shadow-md">
      <div className="flex-grow">
        <img
          src={props.data.imageurl}
          className="w-full h-[150px] rounded-t-lg object-cover"
          alt="background"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="mb-4">
          <p className="text-gray-400 font-normal">{props.data.date}</p>
          <p className="font-normal mt-2">{props.data.description}</p>
        </div>
        <p className="text-xl font-semibold text-slate-600 text-right">
          &#x2012; {props.data.name}
        </p>
      </div>
    </div>
  );
};

export default Featurescard;
