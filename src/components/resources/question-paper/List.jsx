import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { IoMdBook } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from '../../../assets/images/center/karolBagh.png'
import PreviewImage from '../../../reusable/PreviewImage';

const List = () => {

  return (
    <>
      <div className='mt-10 mb-10'>
        <div className="container95">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {Array.from({ length: 5 }).map((_, i) =>
              <div className='radius7 shadow-md border border-[#DEDEDE] bg-[#FCFCFC] '>
                <div className='p-3'>
                  <h3 className='py-2 flex items-center gap-3 font15 '><span>Population and Associated Issues</span></h3 >
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1 theme-para-grey flex-1/2 ">
                      <IoMdBook />
                      <p className='font13'>Year 2025</p>
                    </div>
                    <div className="flex items-center gap-1 justify-center theme-para-grey flex-1/2 ">
                      <p className='font13'>English</p>
                    </div>
                    <div className="flex items-center justify-end gap-1 theme-para-grey flex-1/2 ">
                      <p className='font13'>Mains</p>
                    </div>
                  </div>
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
        </div>
      </div>
      {/* <PreviewImage /> */}
    </>
  )
}

export default List