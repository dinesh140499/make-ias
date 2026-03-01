import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from '../../../assets/images/center/karolBagh.png';
import Pagination from '../../../reusable/Pagination';

const List = () => {
  return (
    <>
      <div className='mt-10 mb-10'>
        <div className="container95">
          <div>
            <p className='capitalize font16'>Toppers’ Test Copies: 2023</p>
            <h3 className='mt-2 font20 border-b w-fit'>Philosophy</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 lg:mt-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                className="lg:flex text-center lg:text-left items-center justify-between px-3 py-2 border border-[#DEDEDE] bg-[#FCFCFC] radius7"
                key={i}
              >
                <p className='lg:text-sm'>Ravi Kumar</p>
                <span className='text-sm'>Rank {i + 1}</span>
                <a
                  href={img1}
                  download
                  className='flex items-center justify-center lg:justify-start gap-1 font13 bg-[#DB251B] text-white radius7 p-1 cursor-pointer mt-3'
                >
                  Download PDF <MdOutlineFileDownload className='text-lg' />
                </a>
              </div>
            ))}
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
