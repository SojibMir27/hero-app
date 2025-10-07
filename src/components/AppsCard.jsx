import React from "react";

const AppsCard = ({ app }) => {
  console.log(app);
  const { image, title, downloads, ratingAvg } = app;

  return (
    <div className="md:w-11/12 w-9/12 mx-auto md:mt-1 md:mb-1 mb-2">
      <div className="card bg-base-100 shadow-sm">
        <figure className="rounded ">
          <img
            className="md:w-60 md:p-8 py-4 px-8 md:mt-2 mt-4 bg-[#d9d9d9] rounded"
            src={image}
            alt="Apps"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="card-actions justify-between">
            <div className="text-[#00d390] font-bold  bg-[#f1f5e8] rounded p-3 py-1 flex justify-center items-center">
              <img className="w-3 mr-2" src="icon-downloads.png" alt="" />
              {downloads}
            </div>
            <div className=" text-[#ff8811] font-bold bg-[#fff0e1] rounded p-3 py-1 flex justify-center items-center">
              <img className="w-3 mr-2" src="icon-ratings.png" alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
