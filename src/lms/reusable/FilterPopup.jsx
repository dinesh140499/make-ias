import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";


const FilterPopup = ({ children, heading, onClose, onSubmit }) => {
    return (
        <div className='h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75 p-2'>
            <div className="bg-white w-full h-full lg:w-[500px] lg:h-[95vh] radius7 p-2 z-60 relative">
                <div className='text-right flex justify-end ps-2 font20 cursor-pointer' onClick={onClose}>
                    <IoClose />
                </div>
                {heading &&
                    <h1 className='font20 mb-2'>{heading}</h1>
                }
                {children}
                <div className="flex items-center gap-3 absolute bottom-2 right-2">
                    <button className='font16 py-1 text-white px-3 radius7 theme-bg-red duration-75 cursor-pointer' onClick={onClose}>Close</button>
                    <button className='font16 py-1 text-white px-3 radius7 theme-bg-black duration-75 cursor-pointer' onClick={onSubmit}>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default FilterPopup
