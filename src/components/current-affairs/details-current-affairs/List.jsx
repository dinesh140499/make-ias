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
          <h3 className='capitalize font22 text-center mb-10 hidden lg:block'>mains value addition Material</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {Array.from({ length: 5 }).map((_, i) =>
              <div className='radius7 shadow-md border border-[#DEDEDE] bg-[#FCFCFC] '>
                <div className='p-3'>
                  <h3 className='py-2 flex items-center gap-3 text-lg lg:text-sm '><SiGoogledocs className='theme-text-red ' /><span>Population and Associated Issues</span></h3 >
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1 theme-para-grey">
                      <IoMdBook />
                      <p className='font13'>Indian Society</p>
                    </div>
                    <div className="flex items-center gap-1 theme-para-grey">
                      <IoMdBook />
                      <p className='font13'>Indian Society</p>
                    </div>
                    <div className="flex items-center gap-1 theme-para-grey">
                      <IoMdBook />
                      <p className='font13'>Indian Society</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-black rounded-bl-[7px] rounded-br-[7px] p-3">
                  <div className="flex items-center gap-1 theme-para-grey cursor-pointer">
                    <p className='font13 text-white '>Preview</p>
                    <GrView className='text-white' />
                  </div>
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