import React from "react";
import courseImg from "../../../assets/images/courses/banner-lg.png";
import { Link } from "react-router-dom";

const Left = () => {
  const percentage = 90;

  return (
    <div className="box relative" >
        <img src={courseImg} alt="course" className="w-full" title="1099 x 270"/>
        <div className="flex items-center justify-center gap-3 absolute top-2 right-2 text-white">
          <h1 className="font20 capitalize">Mains (2026)</h1>

          <div className="relative h-[40px] w-[40px]">
            <div className="absolute inset-0 rounded-full bg-transparent" />
            <div
              className="absolute inset-0 rounded-full duration-75 ease-in"
              style={{
                background: `conic-gradient(white 0% ${percentage}%, transparent ${percentage}% 100%)`,
              }}
            />
            <div
              className="absolute h-[6px] w-[6px] bg-white rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${
                  (percentage / 100) * 360
                }deg) translate(-50%, -120%)`,
                transformOrigin: "center center",
              }}
            />

            <div className="absolute inset-[4px] rounded-full bg-black flex items-center justify-center">
              <p className="text-[10px] text-white">{percentage}%</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Left;
