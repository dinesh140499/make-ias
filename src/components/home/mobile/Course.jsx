// Test.jsx
import React, { useState } from "react";
import SectionHeadingMobile from "../../../common/heading/mobile/SectionHeading";
import { FaRegAddressBook } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import SwiperComponent from "../../../reusable/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import img1 from "../../../assets/images/home/affairs/affair1.png";
import { IoMdBook } from "react-icons/io";
import { CiFilter, CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import TabComponent from "../../../reusable/TabComponent";

const tabData = [
  { title: "All" },
  { title: "UPSC" },
  { title: "UPPCS" },
  { title: "MPPSC" },
  { title: "UKPSC" },
  { title: "BPSC" },
];



const Course = ({ tabTitle }) => {
  return (
    <div className="border border-[#DEDEDE] radius7 pb-0">
      <div className="bg-[#FCFCFC] flex-1 flex gap-3">
        <div className="flex items-center justify-center radius7 ">
          <div className="flex justify-center h-full w-full radius7 lg:flex-1/2">
            <img src={img1} alt="1" className="radius7 h-full w-[126px]" />
          </div>
        </div>
        <div className="mt-1 flex-1/4">
          <div className="flex items-center gap-2 text-lg">
            <IoMdBook />
            <span>General Studies</span>
          </div>
          <h3 className="text-lg lg:text-2xl font-[500] lg:mt-3">Foundation Course 2026</h3>
        </div>
      </div>
      <p className="capitalize theme-para-grey text-lg mt-2">
        Build a solid foundation for UPSC success with our comprehensive
        one-year course.
      </p>
      <div className="flex items-center gap-3 text-black rounded-b-[7px] rounded-t-[7px] px-2 mt-2">

        <div className="flex items-center gap-2">
          <CiLocationOn />
          <span className="text-lg">Delhi</span>
        </div>

        <div className="flex items-center gap-2">
          <LiaLanguageSolid />
          <span className="text-lg">English</span>
        </div>
      </div>
      <div className="flex justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
        <div className="py-2 ">
          <p className="text-lg">21 February 2025, 11:00 AM</p>
          <div className="border border-white my-1"></div>
          <p className="text-lg">21 February 2025, 11:00 AM</p>
        </div>
        <div className="flex gap-2">
          <button className="uppercase theme-bg-red rounded-[7px] py-[5px] px-5 text-lg cursor-pointer font22">
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
