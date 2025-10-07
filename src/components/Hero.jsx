import React from "react";

const Hero = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto mt-10">
      <div className="mx-auto w-8/12 text-center">
        <h1 className="font-bold text-2xl md:text-4xl">We Build</h1>
        <h1 className="font-bold text-2xl md:text-4xl">
          <small className="text-[#9f62f2] text-2xl md:text-4xl">
            Productive
          </small>{" "}
          Apps
        </h1>
        <p className="text-[#627382] mt-4 text-sm md:text-lg ">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <button className="btn font-semibold p-4">
            <img className="w-5" src="playstor.png" alt="" />
            Google Play
          </button>
          <button className="btn font-semibold p-4">
            <img className="w-5" src="Appstor.png" alt="" />
            App Store
          </button>
        </div>
      </div>
      <img className="mx-auto mt-4 w-96" src="hero.png" alt="" />
    </div>
  );
};

export default Hero;
