import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { RxCursorArrow } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify'
import Pagination from '../../../reusable/Pagination';

const List = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-10 mb-10'>
      <div className="container95">
        <h3 className='font22 uppercase mb-10'>tEST sERIES rESULT</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
          {Array.from({ length: 10 }).map((_, i) =>
            <div className='radius7 shadow-md border border-[#DEDEDE] bg-[#FCFCFC] ' key={i}>
              <div className='p-3'>
                <p className='py-2 lg:text-center lg:flex items-center gap-3 font15 justify-center flex flex-col lg:flex-row'>
                  <SiGoogledocs className='theme-text-red text-center text-lg' /><span className='text-center lg:text-left'>UPPCS 2024 MEP - I & I+ {i + 1}</span></p >
              </div>
              <div className="flex justify-center items-center bg-black rounded-bl-[7px] rounded-br-[7px] p-3" onClick={() => navigate(`/tests/test-series-result/${slugify(`UPPCS 2024 MEP - I & I+${i+1}`, {
                trim: true,
                strict: false,
                lower: true,
              })}`)}>

                <div className="flex items-center gap-3 theme-para-grey  cursor-pointer">
                  <p className='font13 text-white uppercase'>
                    <p>Check Your Result</p>
                  </p>
                  <RxCursorArrow className='text-[#FDF416]' />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <div className="mt-20">
        <Pagination />
        </div> */}
      </div>
    </div>
  )
}

export default List