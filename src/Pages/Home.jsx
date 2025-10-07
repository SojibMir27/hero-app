import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import { useLoaderData } from "react-router";
import AppsCard from "../components/AppsCard";

const Home = () => {
  const appData = useLoaderData();

  return (
    <div className="w-full md:w-11/12 mx-auto">
      <Hero />
      <Reviews />
      <div className="w-full md:w-10/12 mx-auto mt-10 mb-5">
        <h1 className="text-center mx-auto text-[#001931] text-5xl font-bold">
          Trending Apps
        </h1>
        <p className="text-center text-sm md:text-lg mx-auto text-[#627382] mt-4 mb-5">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {appData.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
        <button className="btn mx-auto flex justify-center mt-4 mb-4 bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white font-semibold px-8">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;
