import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <Hero />
      <Reviews />
    </div>
  );
};

export default Home;
