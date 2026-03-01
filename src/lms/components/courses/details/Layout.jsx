import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";

const Layout = () => {
  const [internetStatus, setInternetStatus] = useState("Online");
  return (
    <div className="container95">
      <Banner />
      <div className="flex items-center justify-end duration-75 mt-5">
        <div className="flex w-fit bg-[#F9F9F9] radius7">
          <button
            className={`cursor-pointer font16 radius7 font-medium py-2 px-3 ${
              internetStatus == "Offline" ? "theme-bg-red text-white" : ""
            } `}
            onClick={() => setInternetStatus("Offline")}
          >
            Offline
          </button>
          <button
            className={`cursor-pointer font16 font-medium py-2 radius7 px-3 ${
              internetStatus == "Online" ? "theme-bg-red text-white" : ""
            } `}
            onClick={() => setInternetStatus("Online")}
          >
            Online
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
