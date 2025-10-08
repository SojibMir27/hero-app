import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import InstallApps from "./InstallApps";
import { toast } from "react-toastify";

const Install = () => {
  const [install, setInstall] = useState([]);
  const [sortApp, setSortApp] = useState("none");

  useEffect(() => {
    const saveApp = JSON.parse(localStorage.getItem("install"));
    if (saveApp) setInstall(saveApp);
  }, []);

  const sortedApp = () => {
    if (sortApp === "app-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortApp === "app-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  };

  const handleRemoveApp = (id) => {
    toast.success(`Uninstall Successfull!`);
    const existApps = JSON.parse(localStorage.getItem("install"));
    let updatedApps = existApps.filter((p) => p.id !== id);

    setInstall(updatedApps);
    localStorage.setItem("install", JSON.stringify(updatedApps));
  };

  return (
    <div className="w-full md:w-11/12 mx-auto">
      <div className="text-center mt-8 mb-5 px-5 md:px-0">
        <h1 className="font-bold text-4xl text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* single app card */}
      <div className="w-9/10 md:w-9/12 mx-auto mt-10 mb-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold text-2xl text-[#001931]">
            {install.length} Apps Found
          </h1>

          <label className="form-control md:w-40 max-w-xs font-semibold">
            <select
              className="select select-borderd"
              value={sortApp}
              onChange={(e) => setSortApp(e.target.value)}
            >
              <option className="text-[11px] md:text-lg" value="none">
                Sort By Size
              </option>
              <option className="text-[11px] md:text-lg" value="app-asc">
                Low-&gt;High
              </option>
              <option className="text-[11px] md:text-lg" value="app-desc">
                High-&gt;Low
              </option>
            </select>
          </label>
        </div>
        {/* card */}
        {install.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-center py-20">
            <h2 className="text-5xl font-bold text-red-500">
              No Data Found!
            </h2>
            <p className="text-gray-500 text-xl mt-2">You haven't installed any apps yet.</p>
          </div>
        ) : (
          sortedApp().map((ins) => (
            <InstallApps
              key={ins.id}
              handleRemoveApp={handleRemoveApp}
              ins={ins}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Install;
