import React from "react";

const CityDetails = () => {
  return (
    <>
      <div className="flex h-full w-full justify-center px-4 p-2 sm:px-8">
        <div className="h-auto w-full sm:w-[90%] mt-8 flex flex-col lg:flex-row bg-slate-500 rounded-lg">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img
              src=""
              alt="City Image"
              className="h-[300px] w-[90%] sm:h-[370px] sm:w-[350px] sm:mt-5 bg-slate-300 rounded-xl"
            />
          </div>

          {/* Details Section */}
          <div className="w-full h-full lg:w-2/3 flex justify-center items-center mt-6 lg:mt-0">
            <div className="w-full sm:w-[80%] h-full sm:h-[80%] bg-slate-300 rounded-xl flex justify-center flex-col items-center gap-3 p-4">
              <div className="w-full h-[20%] sm:h-[20%] bg-slate-50 rounded-md flex items-center justify-center">
                Name
              </div>
              <div className="h-[50%] sm:h-[40%] w-full bg-slate-50 rounded-md flex items-center justify-center">
                Description
              </div>
              <div className="h-[20px] sm:h-[20%] w-full bg-slate-50 rounded-md flex items-center justify-center">
                Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityDetails;
