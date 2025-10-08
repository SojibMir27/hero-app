import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBackHome = () => {
    navigate('/')
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f5f5f5]">
      <img src="/error-404.png" alt="" />

      <h1 className="font-bold text-4xl text-[#001931]">Oops, page not found!</h1>
      <p className="text-[#627382]">The page you are looking for is not available.</p>
       <button onClick={handleGoBackHome} className="btn mx-auto flex justify-center mt-4 mb-4 bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white font-bold py-6 px-12">
          Go Back Home!
        </button>
    </div>
  );
};

export default ErrorPage;
