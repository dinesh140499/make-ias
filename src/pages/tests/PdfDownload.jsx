import React from 'react'
import image from '../../assets/images/logo/builder-logo.png'
import VideoCard from '../../components/tests/VideoCard'
import { Link } from 'react-router-dom'
import { LuDownload } from "react-icons/lu";
import { Helmet } from 'react-helmet';


const PdfDownload = () => {
  return (
    <>
      <Helmet>
        <title>Tests</title>
      </Helmet>
      <div className='mt-5 lg:mt-10 mb-7'>
        <div className="max-w-[95%] mx-auto lg:container90">
          <h3 className='font20'>General Studies Mains2026 - 8 Full Length Tests + 22 Sectional Tests</h3>
          <div className="radius7  p-1 mt-4 flex flex-wrap lg:flex-nowrap h-full gap-5">
            <div className='h-full w-full border radius7 shadow-md relative'>
              <img src={image} className='mx-auto w-full h-[200px] lg:w-full lg:h-full object-contain ' alt="" />
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-red-600 text-white h-[45px] w-[45px] rounded-full flex justify-center items-center hover:bg-red-700 transition absolute -right-3 -top-5 cursor-pointer"
              >
                <LuDownload className='font20' />
              </a>
            </div>
            <div className='h-full w-full flex-1/3'>
              <VideoCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdfDownload