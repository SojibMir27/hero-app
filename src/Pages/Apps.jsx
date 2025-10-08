import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../components/AppsCard";
import { Link } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import ErrorApps from "./ErrorApps";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");

  const trem = search.trim().toLowerCase();
  const searchApps = trem
    ? apps.filter((app) => app.title.toLowerCase().includes(trem))
    : apps;

const handleGoBack = () => {
    setSearch("");
  };

  return (
    <div className="w-full md:w-10/12 mx-auto mt-10 mb-5">
      <h1 className="text-center mx-auto text-[#001931] text-3xl md:text-5xl font-bold">
        Our All Applications
      </h1>
      <p className="text-center text-sm md:text-lg mx-auto text-[#627382] mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions{" "}
      </p>

      <div className="flex justify-between items-center mb-5 md:flex-row flex-col-reverse">
        <h1 className="font-bold md:mt-0 mt-5 text-sm md:text-2xl text-[#001931]">
          ({searchApps.length}) Apps Found
        </h1>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="search Apps"
          />
        </label>
      </div>

      {searchApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {searchApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <ErrorApps handleGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default Apps;
