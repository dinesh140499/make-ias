import React from 'react'
import { LiaLanguageSolid } from 'react-icons/lia'
import dummyimg from '../../assets/images/center/Nehru.png'
import { SlCalender } from 'react-icons/sl'
import { GoClock } from "react-icons/go";
import { setTestSeries } from '../../features/testsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TestCardMobile from '../home/mobile/Test'
import useIsMobile from '../../customHook/useIsMobile';

const List = () => {
  const dispatch = useDispatch()
  const isMobile = useIsMobile()
  return (
    <div className='mb-8'>
      <div className="container95">
        {Array.from({ length: 5 }).map((_, i) =>
          <div className="lg:flex items-center gap-5 mb-4" key={i}>
            {isMobile ? <>
              <TestCardMobile />
              <TestCardMobile />
            </> :
              <>
                <div className='border border-[#DEDEDE] radius7 '>
                  <div className='bg-[#FCFCFC] flex-1 flex gap-3 p-2 pb-3'>
                    <div className="p-1 flex items-center justify-center radius7 bg-[#F0F0F0]">
                      <div className='flex items-center justify-center h-full w-full radius7'>
                        <img src={dummyimg} alt="1" className='radius7' />
                      </div>
                    </div>
                    <div className='mt-1'>
                      <h3 className='font16 font-[500] font15'>All India General Studies Prelims 2026 General Studies Prelims 2026</h3>
                      <p className='capitalize theme-para-grey font15 pr-24 mt-2 font14'>This test series contains 25 sectional tests and 10 full-length tests.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 ">
                    <div className="flex items-center gap-2"><SlCalender /><span className='font13'>Year 2026</span></div>
                    <div className="flex items-center gap-2"><LiaLanguageSolid /><span className='font13'>Hindi</span></div>
                    <div className="flex items-center gap-2"><GoClock /><span className='font13'>02 February 2025</span></div>
                    <div className="flex items-center gap-2">
                      <Link to={`/tests/${i + 1}`} className='uppercase theme-bg-red rounded-[7px] py-[5px] px-3 cursor-pointer font13' >Buy Now</Link>
                    </div>
                  </div>
                </div>
                <div className='border border-[#DEDEDE] radius7 pb-0'>
                  <div className='bg-[#FCFCFC] flex-1 flex gap-3 p-2 pb-3'>
                    <div className="p-1 flex items-center justify-center radius7 bg-[#F0F0F0]">
                      <div className='flex items-center justify-center h-full w-full radius7'>
                        <img src={dummyimg} alt="1" className='radius7' />
                      </div>
                    </div>
                    <div className='mt-1'>
                      <h3 className='font15 font-[500]'>All India General Studies Prelims 2026 General Studies Prelims 2026</h3>
                      <p className='capitalize theme-para-grey font14 pr-24 mt-2'>This test series contains 25 sectional tests and 10 full-length tests.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 ">
                    <div className="flex items-center gap-2"><SlCalender /><span className='font13'>Year 2026</span></div>
                    <div className="flex items-center gap-2"><LiaLanguageSolid /><span className='font13'>Hindi</span></div>
                    <div className="flex items-center gap-2"><GoClock /><span className='font13'>02 February 2025</span></div>
                    <div className="flex items-center gap-2">
                      <Link to={`/tests/${i + 1}`} className='uppercase theme-bg-red rounded-[7px] py-[5px] px-3 cursor-pointer font13' >Buy Now</Link>
                    </div>
                  </div>
                </div>
              </>}
          </div>)}
      </div>
    </div>
  )
}

export default List