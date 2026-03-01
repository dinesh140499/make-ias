import React from 'react'
import { IoClose } from 'react-icons/io5'
import img1 from '../assets/images/logo/builder-logo.png'
import { setPreviewImg } from '../features/commonSlice'
import { useDispatch } from 'react-redux'

const PreviewImage = ({ src }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75 p-2'>
            <div className="bg-white w-full h-full lg:w-[500px] lg:h-[82vh] radius7 z-60 relative cursor-pointer ">
                <div className='flex justify-between items-center font20 cursor-pointer mb-1 p-2 ' >
                    <h1 className='font20 capitalize'>Image Preview</h1>
                    <IoClose onClick={() => dispatch(setPreviewImg({ modal: false }))} />
                </div>
                <div className="flex items-center justify-center w-full h-[73vh]">
                    <img src={img1 || src} className='h-full w-full object-contain' alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreviewImage