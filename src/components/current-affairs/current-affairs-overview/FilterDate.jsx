import React, { useState } from 'react';
import { SlCalender } from "react-icons/sl";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Content from './Content';
import SectionHeading from '../../../common/heading/SectionHeading';
import img1 from '../../../assets/images/current-affairs/1.png'
import { Link } from 'react-router-dom';
import useIsMobile from '../../../customHook/useIsMobile';


const FilterDate = () => {
  const [value, onChange] = useState(new Date());
  const [toggleCalender, setToggleCalender] = useState(false);
  const isMobile = useIsMobile()

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleCalender = () => {
    setToggleCalender((prev) => !prev);
  };

  const handleDateChange = (date) => {
    console.log(date)
    onChange(date);
    setToggleCalender(false);
  };

  return (
    <div>
      <div className="container95">
        <div className="lg:flex items-start gap-10">
          <div>
            <div className="flex items-center justify-between  border border-[#DB251B] p-3 radius7 mb-5 relative">
              <p className="theme-para-grey font14">{formatDate(value)}</p>
              <SlCalender
                className="text-[#DB251B] cursor-pointer"
                onClick={handleCalender}
              />
              {toggleCalender && (
                <div className="absolute top-[40px] left-0 bg-white shadow-lg p-2 z-10">
                  <Calendar onChange={handleDateChange} value={value} />
                </div>
              )}
            </div>
            <h3 className="capitalize">Table Of Content</h3>
            <ul className="h-[300px] overflow-y-auto py-3 ">
              {Array.from({ length: 10 }).map((_, i) => (
                <li className="py-2 border-b border-b-[#CFCFCF]" key={i}>
                  <p className="font14 text-[#1C55E0]">
                    ₹ 1.27 Lakh Cr in Domestic Defence Production
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Content />
        </div>
        {isMobile ? "" :
          <>
            <div className="mb-3 mt-15">
              <SectionHeading subTitle={"Popular Current Affairs"} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {Array.from({ length: 5 }).map((items, i) =>
                <Card key={i} imgSrc={img1} heading={"PM-JAY to Cover Gig"} para={"Launched in 2019, JJM was aimed at providing..."} />
              )}
            </div>
          </>}
      </div>
    </div>
  );
};

const Card = ({ imgSrc, heading, para }) => {
  return (
    <Link to={"/current-affairs/1"}>
      <div>
        <img src={imgSrc} alt={heading} />
      </div>
      <h2 className='capitalize mt-1 font16'>{heading}</h2>
      <p className='capitalize font13 theme-para-grey'>{para.slice(0, 30)}...</p>
    </Link>
  )
}

export default FilterDate;
