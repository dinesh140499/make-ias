import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegClock } from 'react-icons/fa'
import { IoMdBook } from 'react-icons/io'
import { LiaLanguageSolid } from 'react-icons/lia'
import dummyimg from '../../../assets/images/center/Nehru.png'
import { SlCalender } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import useIsMobile from '../../../customHook/useIsMobile'
import { GoArrowUpRight } from 'react-icons/go'

const List = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  return (
    <>
      <div className='mb-5'>
        <div className="container95">
          {Array.from({ length: 5 }).map((_, i) =>
            <React.Fragment key={i}>
              {isMobile ? <div key={i} className="border border-[#DEDEDE] radius7 pb-0 mb-5">
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
              </div> :
                <div className="flex flex-wrap items-center gap-5 mb-4" key={i}>
                  <div className="flex-col flex gap-0 flex-1 bg-[#FCFCFC] border border-[#DEDEDE] radius7">
                    <div className='flex gap-3 p-3'>
                      <div className='h-[40px] w-[40px] flex items-center justify-center'>
                        <img src={dummyimg} alt="" className='h-full w-full' />
                      </div>
                      <div>
                        <h4 className='font16'>Foundation Course 2026</h4>
                        <div className="flex gap-3 w-full items-center justify-between">
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <IoMdBook />
                            </span>
                            <span className='font13 '>General Studies</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <FaRegClock />

                            </span>
                            <span className='font13 '>Online, Offline</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <CiLocationOn />

                            </span>
                            <span className='font13 '>Delhi</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <LiaLanguageSolid />

                            </span>
                            <span className='font13 '>English</span>
                          </div>
                        </div>

                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='bg-[#272425] text-white w-full rounded-bl-[7px] rounded-br-[7px]'>
                      <div className='flex justify-between'>
                        <div>
                          <div className="flex items-center gap-2 py-[1px] px-2 font13">
                            <SlCalender />
                            <span>
                              21 February 2025, 11:00 AM
                            </span>
                          </div>
                          <div className="flex items-center gap-2 py-1 px-2 font13">
                            <SlCalender />
                            <span>
                              21 February 2025, 11:00 AM
                            </span>
                          </div>
                        </div>
                        <button className='theme-bg-red py-2 px-4 rounded-bl-[7px] rounded-br-[7px] cursor-pointer' onClick={() => navigate(`/courses/${i + 1}`)}>
                          <BsArrowUpRight />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col flex gap-0   flex-1 bg-[#FCFCFC]   border border-[#DEDEDE] radius7">
                    <div className='flex gap-3 p-3'>
                      <div className='h-[40px] w-[40px] flex items-center justify-center'>
                        <img src={dummyimg} alt="" className='h-full w-full' />
                      </div>
                      <div>
                        <h4 className='font16'>Foundation Course 2026</h4>
                        <div className="flex gap-3 w-full items-center justify-between">
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <IoMdBook />

                            </span>
                            <span className='font13 '>General Studies</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <FaRegClock />

                            </span>
                            <span className='font13 '>Online, Offline</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <CiLocationOn />

                            </span>
                            <span className='font13 '>Delhi</span>
                          </div>
                          <div className='flex items-start gap-2 font13 flex-1'>
                            <span>
                              <LiaLanguageSolid />

                            </span>
                            <span className='font13 '>English</span>
                          </div>
                        </div>

                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='bg-[#272425] text-white w-full rounded-bl-[7px] rounded-br-[7px]'>
                      <div className='flex justify-between'>
                        <div>
                          <div className="flex items-center gap-2 py-[1px] px-2 font13">
                            <SlCalender />
                            <span>
                              21 February 2025, 11:00 AM
                            </span>
                          </div>
                          <div className="flex items-center gap-2 py-1 px-2 font13">
                            <SlCalender />
                            <span>
                              21 February 2025, 11:00 AM
                            </span>
                          </div>
                        </div>
                        <Link to={`/courses/${i + 1}`} className='theme-bg-red py-2 px-4 rounded-bl-[7px] rounded-br-[7px] cursor-pointer' >
                          <BsArrowUpRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>}
            </React.Fragment>)}
        </div>
      </div>
    </>
  )
}

export default List