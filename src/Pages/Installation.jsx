import { ChevronDown } from "lucide-react";
import React from "react";

const Installation = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <div className="text-center mt-8 mb-5 px-5 md:px-0">
        <h1 className="font-bold text-4xl text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] md:mt-0 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* single app card */}
      <div className="w-9/10 md:w-9/12 mx-auto mt-10 mb-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold text-2xl text-[#001931]">1 Apps Found</h1>

          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" }}
          >
            Sort By Size
            <ChevronDown />
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm font-semibold"
            popover="auto"
            id="popover-1"
            style={{ positionAnchor: "--anchor-1" }}
          >
            <li>
              <a>Low to High</a>
            </li>
            <li>
              <a>High to Low</a>
            </li>
          </ul>
        </div>
        {/* card */}
        <div className="flex justify-between items-center mx-auto bg-white px-4 space-y-2 rounded-lg mt-2">
          <div className="flex items-center justify-center">
            <img
              className="bg-red-500 rounded w-8 md:w-10"
              src="https://i.ibb.co/ZRMMpfSQ/Facebook.png"
              alt="imgae"
            />
            <div className="ml-4">
              <h1 className="font-bold text-sm md:text-xl mt-2 mb-2 text-[#001931]">
                Forest: Focus for Productivity
              </h1>
              <div className="flex space-x-4">
                <div className="text-[#00d390] text-sm md:text-lg font-semibold py-1 flex justify-center items-center">
                  <img
                    className="w-3 mr-1 mx-auto"
                    src="icon-downloads.png"
                    alt=""
                  />
                  100M
                </div>
                <div className=" text-[#ff8811] text-sm md:text-lg font-semibold py-1 flex justify-center items-center">
                  <img className="w-3 mr-1" src="icon-ratings.png" alt="" />
                  200M
                </div>
                <p className="font-semibold text-sm md:text-lg py-1 flex justify-center items-center text-[#627382]">
                  298 MB
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#00d390] text-white rounded text-sm font-bold md:px-4 px-2 md:py-2 py-1">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
