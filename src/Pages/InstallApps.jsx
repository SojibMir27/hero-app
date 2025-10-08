import React from "react";

const InstallApps = ({ ins, handleRemoveApp }) => {
  return (
    <div className="flex justify-between items-center mx-auto bg-white px-4 space-y-2 rounded-lg mt-2 border border-gray-200 shadow">
      <div className="flex items-center justify-center">
        <img
          className="w-15 md:w-20 md:px-2 md:py-2 py-4 px-4 md:mt-2 md:mr-1 md:ml-1 mt-2 bg-[#d9d9d9] rounded"
          src={ins.image}
          alt="imgae"
        />
        <div className="ml-4">
          <h1 className="font-bold text-sm md:text-xl mt-2 mb-2 text-[#001931]">
            Forest: {ins.title}
          </h1>
          <div className="flex space-x-4">
            <div className="text-[#00d390] text-sm md:text-lg font-semibold py-1 flex justify-center items-center">
              <img
                className="w-3 mr-1 mx-auto"
                src="icon-downloads.png"
                alt=""
              />
              {ins.downloads}
            </div>
            <div className=" text-[#ff8811] text-sm md:text-lg font-semibold py-1 flex justify-center items-center">
              <img className="w-3 mr-1" src="icon-ratings.png" alt="" />
              {ins.ratingAvg}
            </div>
            <p className="font-semibold text-sm md:text-lg py-1 flex justify-center items-center text-[#627382]">
              {ins.size} MB
            </p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => handleRemoveApp(ins.id)} className="bg-[#00d390] text-white rounded text-sm font-bold md:px-4 px-2 md:py-2 py-1 cursor-pointer">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallApps;
