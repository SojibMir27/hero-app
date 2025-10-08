import React from "react";

const ErrorApps = ({ handleGoBack }) => {
  return (
    <div className="flex flex-col justify-center items-center md:min-h-screen bg-[#f5f5f5]">
      <img className="w-80" src="/App-Error.png" alt="" />

      <h1 className="font-bold text-3xl mt-4 text-[#001931]">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="mt-2 text-[#627382] text-center">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button
        onClick={handleGoBack}
        className="btn mx-auto flex justify-center mt-4 mb-4 bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white font-bold py-6 px-12"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorApps;
