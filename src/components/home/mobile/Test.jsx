// Test.jsx
import React, { useState } from "react";
import SectionHeadingMobile from "../../../common/heading/mobile/SectionHeading";
import { FaRegAddressBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { LiaLanguageSolid } from "react-icons/lia";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import TabComponent from "../../../reusable/TabComponent";
import SwiperComponent from "../../../reusable/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import img1 from "../../../assets/images/home/affairs/affair1.png";
import { CiFilter } from "react-icons/ci";

const tabData = [
  { title: "All" },
  { title: "UPSC" },
  { title: "UPPCS" },
  { title: "MPPSC" },
  { title: "UKPSC" },
  { title: "BPSC" },
];



const Test = ({ tabTitle }) => {
  return (
    <div className="border border-[#d8c2c2] radius7 py-2 pb-0">
      <div className=" flex gap-1  radius7 ">
        <div className="p-1 flex items-center justify-center radius7 bg-[#F0F0F0]">
          <div className="flex items-center justify-center h-full w-full radius7 flex-1/2">
            <img src={img1} alt="1" className="radius7 h-full w-[126px]" />
          </div>
        </div>
        <div className="mt-1 flex-1/4">
          <h3 className="font-[500] text-lg lg:text-2xl">
            {tabTitle} General Studies Prelims 2026
          </h3>
          <div className="flex items-center gap-1 mt-3 lg:text-[18px]"><GoClock className="text-[20px]"/><span className="">02 February 2025</span></div>
        </div>
      </div>
      <p className="capitalize theme-para-grey text-lg  px-2 mt-2">
        This test series contains 25 sectional tests and 10 full-length
        tests.
      </p>
      <div className="flex items-center justify-between theme-bg-black text-white px-3 py-1 mt-2">
        <div className="flex items-center gap-2 py-1">
          <SlCalender />
          <span className="text-lg">Year 2026</span>
        </div>
        <div className="flex items-center gap-2 py-1">
          <LiaLanguageSolid />
          <span className="text-lg">Hindi</span>
        </div>

      </div>
      <button className="uppercase w-full text-white theme-bg-red rounded-[7px] rounded-t-[0] py-[5px] px-3 cursor-pointer lg:text-lg">
        Buy Now
      </button>
    </div>
  );
};

export default Test;
