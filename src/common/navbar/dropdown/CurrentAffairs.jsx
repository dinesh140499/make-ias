import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/builder-logo.png';
import { popupBtn, socialIcon, navLink } from '../NavLink';
import { useDispatch } from 'react-redux';
import { setBookMentor } from '../../../features/modalsSlice';
import { MdArrowDropDown } from "react-icons/md";
import dummyimg from '../../../assets/images/center/Nehru.png'

import { IoMdBook } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { BsArrowUpRight } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";

const CurrentAffairs = () => {
    const [items, setItems] = useState({ items: [] });
    const [hoverId, setHoverId] = useState(1)

    useEffect(() => {
        setItems({
            items: [
                { id: 1, name: "Course 1", data: [1, 2] },
                { id: 2, name: "Course 2", data: [1] },
            ],
        });
    }, []);

    // console.log(hoverId)

    return (
        <div className='absolute top-14 left-0 w-[100%] max-h-[70vh] bg-white z-50 shadow radius7 p-3 overflow-y-auto' >
            <div>
                <h4 className='font16 capitalize'>Courses Based On Subjects</h4>
                <p className='font14 theme-para-grey capitalize'>Learn and grow as a developer with our Result oriented pedagogy and project based learning.</p>
            </div>

            <div className="flex items-start gap-5 mt-5 h-full ">
                <div className='flex-1/3'>
                    {items?.items?.map((item, i) =>
                        <div className='w-full' key={i}>
                            <button key={i} className={`  mb-2 font-medium font14 py-2 px-3 radius7 cursor-pointer w-full duration-75 text-left ${hoverId === item.id ? 'theme-bg-red text-white' : 'bg-[#FFE9E9] text-black'} hover:bg-[#DB251B] hover:text-white`} onMouseEnter={() => setHoverId(item.id)}>{item.name}</button>
                        </div>
                    )}
                </div>
                {items?.items.length > 0 && <div className='bg-[#FFE9E9] p-3 radius7 theme-text-black'>
                    <div>
                        <p className='font14 theme-para-grey'>Competitive programming is generally the next step after learning Data structures and Algorithms </p>
                    </div>

                    {/* Card 1 Row 2 Col */}
                    <div className="flex items-center gap-3 mt-5 ">
                        {items?.items?.find(item => item.id === hoverId)?.data?.map((dataItem, i) => (
                            <div key={i} className="flex-col flex gap-0 bg-white radius7 flex-1">
                                <div className='flex gap-3 p-3'>
                                    <div className='h-[40px] w-[40px] flex items-center justify-center'>
                                        <img src={dummyimg} alt="" className='h-full w-full' />
                                    </div>
                                    <div>
                                        <h4 className='font16'>Foundation Course 2026</h4>
                                        <div className="flex items-center mt-1 justify-between w-full">
                                            <div className="flex gap-3 w-full items-center justify-between">
                                                <div className='flex items-start gap-2 font13 flex-1'>
                                                    <IoMdBook />
                                                    <span className='text-[12px] w-[30%]'>General Studies</span>
                                                </div>
                                                <div className='flex items-start gap-2 font13 flex-1'>
                                                    <FaRegClock />
                                                    <span className='text-[12px] w-[70%]'>Online, Offline</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex gap-3 w-full items-center justify-between">
                                                <div className='flex items-start gap-2 font13 flex-1'>
                                                    <CiLocationOn />
                                                    <span className='text-[12px] w-[30%]'>Delhi</span>
                                                </div>
                                                <div className='flex items-start gap-2 font13 flex-1'>
                                                    <LiaLanguageSolid />
                                                    <span className='text-[12px] w-[70%]'>English</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#272425] text-white w-full rounded-bl-[7px] rounded-br-[7px]'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <div className="flex items-center gap-2 py-[1px] px-2 font13">
                                                <SlCalender />
                                                <span>21 February 2025, 11:00 AM</span>
                                            </div>
                                            <div className="flex items-center gap-2 py-1 px-2 font13">
                                                <SlCalender />
                                                <span>21 February 2025, 11:00 AM</span>
                                            </div>
                                        </div>
                                        <button className='theme-bg-red py-2 px-4 rounded-bl-[7px] rounded-br-[7px] cursor-pointer'>
                                            <BsArrowUpRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t mt-3">
                        <p className='font14 mt-1 capitalize italic'>Confused on which course to choose?</p>
                        <Link to={'/courses/1'} className='duration-75 font14 flex w-fit items-center gap-1 radius30 border  border[#DB251B] bg-[#DB251B] text-white py-3 px-3 mt-2 cursor-pointer  hover:bg-white hover:text-[#DB251B]' >
                            <span className='font13'>
                                Explore All Courses
                            </span>
                            <MdArrowRightAlt />
                        </Link>

                    </div>
                </div>}

            </div>



        </div>
    )
}

export default CurrentAffairs