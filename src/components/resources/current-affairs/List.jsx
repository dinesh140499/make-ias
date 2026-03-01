import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { IoMdBook } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import img1 from '../../../assets/images/center/karolBagh.png'
import PreviewImage from '../../../reusable/PreviewImage';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewImg } from '../../../features/commonSlice';

const List = () => {
  const dispatch = useDispatch()
  const { previewImg } = useSelector(state => state.commonSlice)
  
  return (
    <>
      <div className='mt-5 lg:mt-10 mb-10'>
        <div className="container95">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-3">
            {Array.from({ length: 5 }).map((_, i) =>
              <div key={i} className='radius7 shadow-md border border-[#DEDEDE] bg-[#FCFCFC] '>
                <div className='p-3'>
                  <h3 className='py-2 flex items-center gap-3 text-lg capitalize '><SiGoogledocs className='theme-text-red' /><span className='lg:text-sm'>This week top current affairs</span></h3 >
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1 theme-para-grey">
                      <IoMdBook className='text-2xl'/>
                      <p className='text-sm lg:text-md'>Year 2025</p>
                    </div>

                    <div className="flex items-center gap-1 theme-para-grey">
                      <p className='text-sm lg:text-md'>English</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-black rounded-bl-[7px] rounded-br-[7px] p-3">
                  <div className="flex items-center gap-1 theme-para-grey cursor-pointer" onClick={() => dispatch(setPreviewImg({ modal: true }))}>
                    <p className='text-sm lg:text-sm text-white '>Preview</p>
                    <GrView className='text-white' />
                  </div>
                  <div className="flex items-center gap-1 theme-para-grey  cursor-pointer">
                    <p className='text-sm lg:text-sm text-white '>
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
      {previewImg.modal &&
        <PreviewImage />
      }
    </>
  )
}

export default List