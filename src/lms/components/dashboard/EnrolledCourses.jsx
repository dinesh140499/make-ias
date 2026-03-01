import React from 'react'
import Icon from '../../assets/images/dashboard/icon.png'

const EnrolledCourses = () => {
    return (
        <div className='mt-10'>
            <div className="lg:flex gap-10">
                <div className='lg:w-[65%]'>
                    <div className="flex justify-between items-center mb-5 ">
                        <h1 className='text-lg'>Enrolled Courses</h1>
                        <button className='font-bold text-sm cursor-pointer'>See All</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-72 overflow-y-auto common-scrollbar lg:gap-5 ">
                        {Array.from({ length: 19 }).map((_, i) =>
                            <div key={i} className="flex-col-reverse lg:flex-row flex items-center justify-between border-[2px] border-[#DB251B] radius10 px-3 py-3 shadow-sm lg:even:mr-5">
                                <div className='lg:flex flex-col justify-between gap-5'>
                                    <p className='text-sm'>Mains 2025</p>
                                    <button className='radius10 capitalize py-1 bg-[#DB251B] text-sm rounded-full w-[80px] text-white mt-3 cursor-pointer'>View</button>
                                </div>
                                <img src={Icon} alt="" />
                            </div>)}

                    </div>
                </div>
                <div className='lg:w-[35%] mt-10 lg:mt-0'>
                    <div className="flex justify-between items-center mb-3 lg:mb-5">
                        <h1 className='text-lg'>Daily Notice</h1>
                        <button className='font-bold text-sm cursor-pointer'>See All</button>
                    </div>
                    <div className='h-52 overflow-y-auto shadow-sm px-3 py-2 radius30 common-scrollbar pr-3'>
                        <div className=' bg-white my-3'>
                            <h1 className='capitalize text-sm'>Prelim payment due</h1>
                            <p className='font13 theme-para-grey'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className='capitalize font13 theme-text-red cursor-pointer'>See more</button>
                        </div>
                        <div className=' bg-white my-3'>
                            <h1 className='capitalize text-sm'>Prelim payment due</h1>
                            <p className='font13 theme-para-grey'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className='capitalize font13 theme-text-red cursor-pointer'>See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrolledCourses