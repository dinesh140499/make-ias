import React from 'react';
import Video from '../../../reusable/Video'
import { SlCalender } from "react-icons/sl";
import { BsBook } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineSos } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";

const VideoCard = ({ src }) => {

  return (
    <div className="shadow-md p-2 radius7 bg-white mt-10 lg:mt-0">
      <Video src={"https://www.youtube.com/watch?v=CoZXoU6qMw8&t=1s&ab_channel=MakeIAS"} className={"w-full lg:w-[400px] lg:h-[200px] "} />
      <div className='border-t border-t-[black] mt-6 mb-1 '>
        <div className="flex items-center justify-around mt-5">
          <h3 className='font20 text-[#1178FF] tracking-wide'>₹ 4500</h3>
          <button className='theme-bg-red text-white py-2 px-10 radius7 font14 cursor-pointer font-medium'>Buy Now</button>
        </div>
        <div className='mt-5'>
          <h3 className='text-lg mb-1'>Course Details:</h3>
          <p className='text-md lg:text-sm flex items-center gap-3 mb-1'><span><SlCalender /></span> <span>9 February 2025</span></p>
          <p className='text-md lg:text-sm flex items-center gap-3 mb-1'><span><BsBook /></span> <span>30 Tests ( 8 Full Length + 22 Sectional )</span></p>
          <p className='text-md lg:text-sm flex items-center gap-3 mb-1'><span><IoLanguage /></span> <span>English</span></p>
          <p className='text-md lg:text-sm flex items-center gap-3 mb-1'><span><MdOutlineSos /></span> <span>Live/Classroom Discussion</span></p>
          <p className='text-md lg:text-sm flex items-center gap-3 mb-1'><span><MdOutlineMessage /></span> <span>Email/Chat/Telephonic</span></p>
          <p className='text-md lg:text-sm flex items-center gap-3'><span><VscFileSubmodule /></span> <span>Module Code - 2705</span></p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
