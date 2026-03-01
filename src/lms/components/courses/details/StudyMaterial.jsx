import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";

const materials = [
  {
    id: 1,
    title: "test-01",
    download: "",
    color: "#272425",
  },
  {
    id: 2,
    title: "Download Modal Answer",
    download: "",
    color: "transparent",
  },
  {
    id: 3,
    title: "Submit Online answer copy",
    download: "",
    color: "transparent",
  },
  {
    id: 4,
    title: "Download Evaluated Copy",
    download: "",
    color: "transparent",
  },
  {
    id: 5,
    title: "Video discussion",
    download: "",
    color: "transparent",
  },
  {
    id: 5,
    title: "Talk To Mentor",
    download: "",
    color: "#DB251B",
  },
];

const StudyMaterial = () => {
  const {id} = useParams();
  const textColor = (color) => {
    switch (color) {
      case "#272425":
      case "#DB251B":
        return "text-white";
      default:
        return "text-black";
    }
  };

  return (
    <div className="mt-10">
      <h1 className="capitalize font20 mb-10">
        General Studies Value Addition Material 2024_Hindi_Soft Copy Only
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 duration-75 mt-3">
        {materials?.map((materials, i) => (
          <Link
            to={`/courses/${id}/prelims`}
            key={i}
            className={` radius7 border px-3 text-center flex items-center justify-center shadow-md h-20 ${textColor(
              materials.color
            )}`}
            style={{ backgroundColor: materials.color }}
          >
            <h1 className="uppercase font15">{materials.title}</h1>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5 mt-10 mb-5">
        <h1 className="capitalize font16">Best Copies</h1>
        <button className="flex items-center font16 gap-1 bg-[#FDF416] radius7 py-1 px-3 cursor-pointer shadow-md">
          <p>Download</p> <MdOutlineFileDownload />
        </button>
        <button className="flex items-center font16 gap-1 bg-[#FDF416] radius7 py-1 px-3 cursor-pointer shadow-md">
          <p>Download</p> <MdOutlineFileDownload />
        </button>
      </div>
    </div>
  );
};

export default StudyMaterial;
