import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from '../../../assets/images/center/karolBagh.png';
import Pagination from '../../../reusable/Pagination';
import { SiGoogledocs } from 'react-icons/si';
import { setPreviewImg } from '../../../features/commonSlice';
import { GrView } from 'react-icons/gr';
import { IoMdBook } from 'react-icons/io';

const List = () => {
  return (
    <>
      <div className='mt-10 mb-10'>
        <div className="container95">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {Array.from({ length: 5 }).map((_, i) =>
              <div key={i} className='radius7 shadow-md border border-[#DEDEDE] bg-[#FCFCFC] '>
                <div className='p-3'>
                  <h3 className='py-2 flex items-center gap-3 font15 justify-center capitalize'><SiGoogledocs className='theme-text-red ' /><span>Outlines of Indian Philosophy ( 2022)</span></h3 >
                </div>
                <div className="flex justify-center items-center bg-black rounded-bl-[7px] rounded-br-[7px] p-3">

                  <div className="flex items-center gap-1 theme-para-grey  cursor-pointer">
                    <p className='font13 text-white '>
                      <a href={img1} download>Download PDF</a>
                    </p>
                    <MdOutlineFileDownload className='text-white' />
                  </div>
                </div>
              </div>
            )}
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
