import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { toast } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    let installed = JSON.parse(localStorage.getItem("install")) || [];

    if (!Array.isArray(installed)) {
      installed = [];
    }

    const foundApp = installed.some((a) => a.id === app?.id);
    setIsInstalled(foundApp);
  }, [app]);

  if (loading) return <p>Loading...</p>;
  if (!app) return <p>App not found</p>;

  const { image, title, downloads, ratingAvg, size } = app;

  const handleInstallApp = () => {
    let existApps = JSON.parse(localStorage.getItem("install")) || [];

    if (!Array.isArray(existApps)) {
      existApps = [];
    }
    const updated = [...existApps, app];

    localStorage.setItem("install", JSON.stringify(updated));
    setIsInstalled(true);
    toast.success(`${title} Install Successfull`);
  };

  return (
    <div
      to={`/app/${id}`}
      className="md:w-11/12 w-9/12 mx-auto md:mt-1 md:mb-1 mb-2"
    >
      <div className="card bg-base-100 shadow-sm mt-5 mb-5">
        <figure className="rounded p-2">
          <img
            className="md:w-60 w-20 md:px-2 md:py-2 py-4 px-4 md:mt-0 md:mr-1 md:ml-1 mt-4 bg-[#d9d9d9] rounded"
            src={image}
            alt="Apps"
          />
          <button
            onClick={handleInstallApp}
            disabled={isInstalled}
            className="btn w-50 mx-auto flex justify-center mt-4 mb-4 bg-[#00d390] text-white font-semibold px-8"
          >
            {isInstalled ? "Installed✔️" : `Install Now (${size} MB)`}
          </button>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="card-actions justify-between">
            <div className="text-[#00d390] font-bold  bg-[#f1f5e8] rounded p-3 py-1 flex justify-center items-center">
              <img className="w-3 mr-2" src="/icon-downloads.png" alt="" />
              {downloads}
            </div>
            <div className=" text-[#ff8811] font-bold bg-[#fff0e1] rounded p-3 py-1 flex justify-center items-center">
              <img className="w-3 mr-2" src="/icon-ratings.png" alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
