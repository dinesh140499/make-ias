// Test.jsx
import React, { useState } from "react";
import SectionHeading from "../../common/heading/SectionHeading";
import { FaRegAddressBook } from "react-icons/fa";
import TabComponent from "../../reusable/TabComponent";
import { SlCalender } from "react-icons/sl";
import { LiaLanguageSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import SwiperComponent from "../../reusable/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import img1 from "../../assets/images/home/affairs/affair1.png";
import { IoMdBook } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import useIsMobile from "../../customHook/useIsMobile";
import MobileTabCard from "./mobile/Course";

const tabData = [
  { title: "All" },
  { title: "UPSC" },
  { title: "UPPCS" },
  { title: "MPPSC" },
  { title: "UKPSC" },
  { title: "BPSC" },
];

const Course = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useIsMobile();

  return (
    <>
      <section className="course mt-10">
        <div className="container95">
          <SectionHeading
            Icon={FaRegAddressBook}
            title="Courses"
            subTitle={"Explore Our Courses"}
          />
          <div className="mt-3">
            <TabComponent
              tabs={tabData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeColor="theme-bg-red text-white"
              inactiveColor="bg-[#F2F2F2] text-black"
              customStyle={{ button: "text-md lg:text-sm rounded-md " }}
            />

          </div>
          <div className="mt-4">
            <SwiperComponent
              showNavigation={true}
              slidesPerView={1}
              customStyles={{
                btnPrev:
                  "custom-swiper-prev absolute left-0 bottom-[-25%] z-10 -translate-y-1/2 p-2 shadow rounded-full cursor-pointer font20 duration-200 bg-[#F5F5F5] text-black duration-75 hover:bg-[#DB251B] hover:text-white",
                btnNext:
                  "custom-swiper-next absolute right-0 bottom-[-25%] z-10 -translate-y-1/2 p-2 shadow rounded-full cursor-pointer font20 duration-200 bg-[#F5F5F5] text-black duration-75 hover:bg-[#DB251B] hover:text-white",
              }}
              prevIcon={<GrFormPreviousLink />}
              nextIcon={<GrFormNextLink />}
              options={{
                pagination: { clickable: false },
                breakpoints: {
                  1260: {
                    slidesPerView: 2,
                  },
                },
              }}
            >
              {[...Array(4)].map((_, index) => (
                <SwiperSlide key={index}>
                  {isMobile ? <MobileTabCard /> :
                    <div className="flex gap-5 mt-4 flex-col">
                      <TabCard tabTitle={tabData[activeTab].title} />
                      <TabCard tabTitle={tabData[activeTab].title} />
                    </div>
                  }

                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </section>
    </>
  );
};

const TabCard = ({ tabTitle }) => {
  return (
    <div className="border border-[#DEDEDE] radius7 pb-0">
      <div className="bg-[#FCFCFC] flex-1 flex gap-3">
        <div className="p-1 flex items-center justify-center radius7 bg-[#F0F0F0]">
          <div className="flex items-center justify-center h-full w-full radius7">
            <img src={img1} alt="1" className="radius7" />
          </div>
        </div>
        <div className="mt-1">
          <h3 className="lg:text-lg font-[500]">Foundation Course 2026</h3>
          <p className="capitalize theme-para-grey font15 pr-24 mt-2">
            Build a solid foundation for UPSC success with our comprehensive
            one-year course.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between  text-black rounded-b-[7px] rounded-t-[7px] px-2 mt-2">
        <div className="flex items-center gap-2">
          <IoMdBook />
          <span className="font14">General Studies</span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <span className="font14">Delhi</span>
        </div>
        <div className="flex items-center gap-2">
          <GoClock />
          <span className="font14">Online, Offline</span>
        </div>
        <div className="flex items-center gap-2">
          <LiaLanguageSolid />
          <span className="font14">English</span>
        </div>
      </div>
      <div className="flex items-center justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
        <div className="flex items-center gap-5">
          <p className="font14">21 February 2025, 11:00 AM</p>
          <p className="font14">21 February 2025, 11:00 AM</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="uppercase theme-bg-red rounded-[7px] py-[10px] px-3 font20 cursor-pointer">
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
