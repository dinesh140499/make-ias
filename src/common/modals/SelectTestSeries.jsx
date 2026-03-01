import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setTestSeries } from '../../features/testsSlice';

const SelectTestSeries = () => {
    const dispatch = useDispatch();

    const handleSelectTest = (date) => {
        dispatch(
            setTestSeries({ modal: false })
        )
    }

    return (
        <div className='h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75 p-2'>
            <div className="bg-white w-full h-full lg:w-[500px] lg:h-[22vh]  radius7 z-60 relative cursor-pointer overflow-y-auto mb-1 p-2 flex justify-center items-center ">
                <div className='h-full w-full'>
                    <div className='flex justify-between items-center font20 cursor-pointer  ' onClick={() => dispatch(setTestSeries({ modal: false }))}>
                        <h1 className='font16 capitalize'>All India General Studies Prelims 2026</h1>
                        <IoClose />
                    </div>
                    <p className='theme-para-grey font14 mt-[2px]'>Select test series start date</p>
                    <div className="flex items-center gap-3">
                        <button className='mt-5 font15 radius7  text-black px-5 py-1 border cursor-pointer duration-75 hover:bg-[#DB251B] hover:text-white' onClick={handleSelectTest}>9 Feb 2025</button>
                        <button className='mt-5 font15 radius7  text-black px-5 py-1 border cursor-pointer duration-75 hover:bg-[#DB251B] hover:text-white' onClick={handleSelectTest}>10 Feb 2025</button>
                        <button className='mt-5 font15 radius7  text-black px-5 py-1 border cursor-pointer duration-75 hover:bg-[#DB251B] hover:text-white' onClick={handleSelectTest}>11 Feb 2025</button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default SelectTestSeries;
