import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegClock } from 'react-icons/fa'
import { IoMdBook } from 'react-icons/io'
import { LiaLanguageSolid } from 'react-icons/lia'
import dummyimg from '../../../../assets/images/center/Nehru.png'
import { SlCalender } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Video from '../../details/VideoCard'
import { GoArrowUpRight } from 'react-icons/go'

const List = () => {
  const navigate = useNavigate()
  return (
    <div className='mb-5'>
      <div className="container95">
        {Array.from({ length: 5 }).map((_, i) =>
          <div className="flex flex-wrap items-center gap-5 mb-4" key={i}>
            <div className="border border-[#DEDEDE] radius7 pb-0">
              <div className="bg-[#FCFCFC] flex-1 flex gap-3">
                <div className="flex items-center justify-center radius7 ">
                  <div className="flex justify-center w-full radius7 flex-1/2 p-1">
                    <img src={dummyimg} alt="1" className="radius7 h-full w-[100px]" />
                  </div>
                </div>
                <div className="mt-1 flex-1/4">
                  <div className="flex items-center gap-2 text-[20px]">
                    <IoMdBook />
                    <span className="text-[20px]">General Studies</span>
                  </div>
                  <h3 className="text-[20px] font-[500] mt-1">Foundation Course 2026</h3>
                </div>
              </div>
              <p className="capitalize theme-para-grey text-lg mt-2 px-2">
                Build a solid foundation for UPSC success with our comprehensive
                one-year course.
              </p>
              <div className="flex items-center gap-3 text-black rounded-b-[7px] rounded-t-[7px] px-2 mt-2">

                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span className="text-lg">Delhi</span>
                </div>

                <div className="flex items-center gap-2">
                  <LiaLanguageSolid />
                  <span className="text-lg">English</span>
                </div>
              </div>
              <div className="flex justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
                <div className="py-2 ">
                  <p className="text-lg">21 February 2025, 11:00 AM</p>
                  <div className="border border-white my-1"></div>
                  <p className="text-lg">21 February 2025, 11:00 AM</p>
                </div>
                <div className="flex gap-2">
                  <button className="uppercase theme-bg-red rounded-[7px] py-[5px] px-5 text-lg cursor-pointer font22">
                    <GoArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-[#DEDEDE] radius7 pb-0">
              <div className="bg-[#FCFCFC] flex-1 flex gap-3">
                <div className="flex items-center justify-center radius7 ">
                  <div className="flex justify-center w-full radius7 flex-1/2">
                    <img src={dummyimg} alt="1" className="radius7 h-full w-[100px]" />
                  </div>
                </div>
                <div className="mt-1 flex-1/4">
                  <div className="flex items-center gap-2 text-[20px]">
                    <IoMdBook />
                    <span className="text-[20px]">General Studies</span>
                  </div>
                  <h3 className="text-[20px] font-[500] mt-1">Foundation Course 2026</h3>
                </div>
              </div>
              <p className="capitalize theme-para-grey text-lg mt-2 px-2">
                Build a solid foundation for UPSC success with our comprehensive
                one-year course.
              </p>
              <div className="flex items-center gap-3 text-black rounded-b-[7px] rounded-t-[7px] px-2 mt-2">

                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span className="text-lg">Delhi</span>
                </div>

                <div className="flex items-center gap-2">
                  <LiaLanguageSolid />
                  <span className="text-lg">English</span>
                </div>
              </div>
              <div className="flex justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
                <div className="py-2 ">
                  <p className="text-lg">21 February 2025, 11:00 AM</p>
                  <div className="border border-white my-1"></div>
                  <p className="text-lg">21 February 2025, 11:00 AM</p>
                </div>
                <div className="flex gap-2">
                  <button className="uppercase theme-bg-red rounded-[7px] py-[5px] px-5 text-lg cursor-pointer font22">
                    <GoArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default List