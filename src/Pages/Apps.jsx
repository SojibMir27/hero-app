import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../components/AppsCard";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

const Apps = () => {
  const { apps } = useApps();
  console.log(apps);

  return (
    <div className="w-full md:w-10/12 mx-auto mt-10 mb-5">
      <h1 className="text-center mx-auto text-[#001931] text-5xl font-bold">
        Our All Applications
      </h1>
      <p className="text-center text-sm md:text-lg mx-auto text-[#627382] mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions{" "}
      </p>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {apps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
