import React from "react";

const CityDetails = (props) => {
  // console.table(props);
  return (
    <div className="flex flex-col items-center w-full px-4 py-6 sm:px-8">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* City Image Section */}
        <div className="w-full lg:w-1/3 bg-gray-100 flex justify-center items-center p-4">
          <img
            src={props.data.cityimg}
            alt="City Image"
            className="h-64 mx-auto w-full object-cover transition-all duration-700 hover:-skew-x-1 hover:scale-110 rounded-lg shadow-md "
          />
        </div>

        {/* City Details Section */}
        <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
          <div className="mb-6">
            {/* City Name */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center lg:text-left">
              {props.data.cityname}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-center lg:text-left mb-4">
              {props.data.description}
            </p>
          </div>

          {/* Pricing */}
          <div className="flex justify-center lg:justify-start">
            <span className="text-2xl font-semibold text-green-600">
              ₹ {props.data.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
