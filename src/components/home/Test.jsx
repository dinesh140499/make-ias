import React, { useState } from 'react';
import SectionHeading from '../../common/heading/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { LiaLanguageSolid } from "react-icons/lia";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import TabComponent from '../../reusable/TabComponent';
import SwiperComponent from '../../reusable/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/home/affairs/affair1.png';
import TestCard from '../home/mobile/Test';
import useIsMobile from '../../customHook/useIsMobile';

const tabData = [
  { title: "All" },
  { title: "UPSC" },
  { title: "UPPCS" },
  { title: "MPPSC" },
  { title: "UKPSC" },
  { title: "BPSC" }
];

const Test = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useIsMobile();



  return (
    <section className="explore">
      <div className="container95">
        <SectionHeading Icon={FaRegAddressBook} title="Test" subTitle="Latest Test Series" />

        <div className='mt-3'>
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
            slidesPerView={1}
            showNavigation={true}
            customStyles={{
              btnPrev: "custom-swiper-prev absolute left-0 bottom-[-25%] z-10 -translate-y-1/2 p-2 shadow rounded-full cursor-pointer font20 duration-200 bg-[#F5F5F5] text-black hover:bg-[#DB251B] hover:text-white",
              btnNext: "custom-swiper-next absolute right-0 bottom-[-25%] z-10 -translate-y-1/2 p-2 shadow rounded-full cursor-pointer font20 duration-200 bg-[#F5F5F5] text-black hover:bg-[#DB251B] hover:text-white"
            }}
            prevIcon={<GrFormPreviousLink />}
            nextIcon={<GrFormNextLink />}
            options={{
              pagination: { clickable: false },
              breakpoints: {
                1260: { slidesPerView: 2 },
               
              },
            }}
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                {isMobile ? <TestCard tabTitle={tabData[activeTab].title} /> : <div className="flex gap-5 mt-4 flex-col">
                  <TabCard tabTitle={tabData[activeTab].title} />
                  <TabCard tabTitle={tabData[activeTab].title} />
                </div>}
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
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
          <h3 className="font16 font-[500]">{tabTitle} General Studies Prelims 2026</h3>
          <p className="capitalize theme-para-grey font15 pr-24 mt-2">
            This test series contains 25 sectional tests and 10 full-length tests.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
        <div className="flex items-center gap-2"><SlCalender /><span className="font14">Year 2026</span></div>
        <div className="flex items-center gap-2"><LiaLanguageSolid /><span className="font14">Hindi</span></div>
        <div className="flex items-center gap-2"><GoClock /><span className="font14">02 February 2025</span></div>
        <div className="flex items-center gap-2">
          <button className="uppercase theme-bg-red rounded-[7px] py-[5px] px-3 cursor-pointer font14">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
