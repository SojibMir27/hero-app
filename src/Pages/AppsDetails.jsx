import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { toast } from "react-toastify";
import { Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BarChart } from "lucide-react";
import Chart from "./Chart";
import ErrorApps from "./ErrorApps";
import LoadingSpeener from "../components/LoadingSpeener";

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

  if (loading) return <LoadingSpeener/>;
  if (!app) return <ErrorApps />;

  const { image, title, downloads, ratingAvg, size, companyName, reviews } =
    app;

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
      className="md:w-11/12 mx-auto md:mt-1 md:mb-1 mb-2 p-2"
    >
      <div className="card mb-5 py-5 md:p-10">
        <div className="flex flex-col md:flex-row">
          <figure className="rounded-lg p-2 bg-white w-35 md:w-70 mx-auto md:mx-0">
            <img
              className="md:w-60 w-40 md:px-2 md:py-2 py-4 px-4 md:mt-0 md:mr-1 md:ml-1 mt-4 bg-white rounded-lg"
              src={image}
              alt="Apps"
            />
          </figure>
          <div className="mx-1 mt-4 md:mt-0 md:ml-10">
            <div className="mx-auto flex flex-col justify-center md:justify-normal md:items-baseline items-center">
              <h2 className="font-bold md:text-4xl">
                Company Name: {companyName}
              </h2>
              <p className="font-semibold mt-3">
                Developed By{" "}
                <small className="text-blue-500">productive.io</small>
              </p>
            </div>

            <div className="divider"></div>

            <div className="card-actions space-x-8 md:mx-0 mx-auto flex md:justify-normal justify-center">
              <div className="space-y-1">
                <img className="w-10 mr-2" src="/icon-downloads.png" alt="" />
                <p>Downloads</p>
                <p className="font-bold text-3xl md:text-4xl">{downloads}</p>
              </div>
              <div className="space-y-1">
                <img className="w-10 mr-2" src="/icon-ratings.png" alt="" />
                <p>Average Ratings</p>
                <p className="font-bold text-3xl md:text-4xl">{ratingAvg}</p>
              </div>
              <div className="space-y-1">
                <img className="w-10 mr-2" src="/icon-review.png" alt="" />
                <p>Total Reviews</p>
                <p className="font-bold text-3xl md:text-4xl">{reviews}</p>
              </div>
            </div>

            <button
              onClick={handleInstallApp}
              disabled={isInstalled}
              className="btn w-40 md:w-50 mx-auto md:mx-0 mt-8 mb-4 bg-[#00d390] text-white font-semibold py-6 text-[10px] md:text-[16px] flex"
            >
              {isInstalled ? "Installed✔️" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="border-b border-gray-300">
          {/* Chart */}
          <h3 className="font-bold text-xl text-[#001931] mt-5">Rating</h3>
          <div className="">
            <Chart ratings={app.ratings} />
          </div>
        </div>
        <p className="font-semibold text-lg mt-5 mb-2">Description: </p>
        <p className="text-[#627382]">{app.description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
