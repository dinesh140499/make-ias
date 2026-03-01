import React from "react";
import courseImg from "../../assets/images/courses/course1.png";
import { Link } from "react-router-dom";
import useIsMobile from "../../customHook/useIsMobile";

const Left = () => {
  const isMobile = useIsMobile();

  const percentage = 90;

  return (
    <div className="lg:max-h-[100vh] overflow-y-auto course-scrollbar">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-3">
        {(isMobile
          ? Array.from({ length: 4 }) // Always show 4 In Mobile Screen
          : Array.from({ length: 10 })
        ).map((_, i) => (
          <Link
            to={`/courses/${i + 1}`}
            className="box relative w-fit lg:mr-5 rounded-lg"
            key={i}
          >
            <img src={courseImg} alt="course" className="" />
            <div className="flex items-center justify-center gap-3 absolute top-2 right-2 text-white">
              <h1 className="text-sm lg:text-2xl capitalize">Mains (2026)</h1>

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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Left;
