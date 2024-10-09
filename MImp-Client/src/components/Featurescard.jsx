import React from "react";
import { User2 } from "lucide-react";
import { Link } from "react-router-dom";
const Featurescard = (props) => {
  return (
      <div className="w-[300px] h-auto  rounded-xl bg-[#e8eefc] text-black">
        <div className="relative flex flex-col items-center">
          <div className="h-[45%] m-3">
            <img
              src={props.data.imageurl}
              className="w-full h-full rounded-lg object-cover"
              alt="background"
            />
          </div>
          <div className="w-full h-full flex flex-col p-4">
            <div className="mb-4">
              <p className="text-gray-400 font-normal">{props.data.date}</p>
              <p className="font-normal mt-2">
              {props.data.description}
                <p className="text-2xl font-semibold flex justify-end text-slate-600">
                  &#x2012; {props.data.name}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Featurescard;
