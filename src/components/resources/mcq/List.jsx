import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from '../../../assets/images/center/karolBagh.png';
import banner1 from '../../../assets/images/resources/mcq1.png'
import banner2 from '../../../assets/images/resources/mcq2.png'
import Pagination from '../../../reusable/Pagination';



const List = () => {
  return (
    <>
      <div className='mt-10 mb-10'>
        <div className="container95">
         
          <div className="lg:flex gap-10">
            <div className="grid gap-3 flex-1/2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  className="flex items-center justify-between px-3 py-0 border border-[#DEDEDE] bg-[#FCFCFC] radius7"
                  key={i}
                >
                  <p className='font14'>Ravi Kumar</p>
                  <span className='font14'>Rank {i + 1}</span>
                  <a
                    href={img1}
                    download
                    className='flex items-center gap-1 font13 bg-[#DB251B] text-white radius7 p-1 cursor-pointer'
                  >
                    Download PDF <MdOutlineFileDownload className='font16' />
                  </a>
                </div>
              ))}
            </div>
            <div className='flex flex-1/2 flex-col gap-5 mt-10 lg:mt-0'>
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
            </div>
          </div>
          <div className='mt-10'>
            {/* <Pagination /> */}

          </div>
        </div>

      </div>
    </>
  );
};

export default List;
