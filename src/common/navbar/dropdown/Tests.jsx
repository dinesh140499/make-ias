import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/builder-logo.png';
import { popupBtn, socialIcon, navLink } from '../NavLink';
import { useDispatch } from 'react-redux';
import { setBookMentor } from '../../../features/modalsSlice';
import { MdArrowDropDown } from "react-icons/md";
import dummyimg from '../../../assets/images/center/Nehru.png'
import img1 from '../../../assets/images/home/affairs/affair1.png';


import { IoMdBook } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { BsArrowUpRight } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";
import { GoClock } from 'react-icons/go';

const Tests = ({ itemsData }) => {
    const [items, setItems] = useState([]);
    const [hoverId, setHoverId] = useState(1)

    useEffect(() => {
        setItems(itemsData);
    }, []);


    return (
        <div className='absolute top-14 left-0 w-[100%] max-h-[70vh] bg-white z-50 shadow radius7 p-3 overflow-y-auto' >
            <div>
                <h4 className='font16 capitalize'>Tests based on subjects</h4>
                <p className='font14 theme-para-grey capitalize'>Learn and grow as a developer with our Result oriented pedagogy and project based learning.</p>
            </div>

            <div className="flex items-start gap-5 mt-5 h-full ">
                <div className='flex-1/2 '>
                    {items?.map((item, i) =>
                        <div className='w-full' key={i}>
                            <button key={i} className={`  mb-2 font-medium font14 py-2 px-3 radius7 cursor-pointer w-[200px] duration-75 text-left ${hoverId === item.id ? 'theme-bg-red text-white' : 'bg-[#FFE9E9] text-black'} hover:bg-[#DB251B] hover:text-white`} onMouseEnter={() => setHoverId(item.id)}>{item.name}</button>
                        </div>
                    )}
                </div>
                {items.length > 0 && <div className='bg-[#FFE9E9] p-3 radius7 theme-text-black'>
                    <div>
                        <h3>Data Structure Algorithms</h3>
                        <p className='font14 theme-para-grey'>Competitive programming is generally the next step after learning Data structures and Algorithms and helps you write optimised and efficient code using minimalistic methodology. Knowledge of Competitive programming is required to prepare for and fare Coding competitions like Google Codejam, Facebook Hackercup, ACM-ICPC and additionally for cracking Big Tech orgs </p>
                    </div>

                    {/* Card 1 Row 2 Col */}
                    <div className="mt-5 ">
                        {items?.find(item => item.id === hoverId)?.data?.map((dataItem, i) => (
                            <div className='border border-[#DEDEDE] bg-white radius7 pb-0 mb-3' key={i}>
                                <div className='bg-[#FCFCFC] flex-1 flex gap-3'>
                                    <div className="p-1 flex items-center justify-center radius7 bg-[#F0F0F0]">
                                        <div className='flex items-center justify-center h-full w-full radius7'>
                                            <img src={img1} alt="1" className='radius7' />
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h3 className='font16 font-[500]'>General Studies Prelims 2026</h3>
                                        <p className='capitalize theme-para-grey font15 pr-24 mt-2'>This test series contains 25 sectional tests and 10 full-length tests.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between theme-bg-black text-white rounded-b-[7px] rounded-t-[7px] ps-2 mt-2">
                                    <div className="flex items-center gap-2"><SlCalender /><span className='font14'>Year 2026</span></div>
                                    <div className="flex items-center gap-2"><LiaLanguageSolid /><span className='font14'>Hindi</span></div>
                                    <div className="flex items-center gap-2"><GoClock /><span className='font14'>02 February 2025</span></div>
                                    <div className="flex items-center gap-2">
                                        <button className='uppercase theme-bg-red rounded-[7px] py-[5px] px-3 cursor-pointer font14'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t mt-3">
                        <p className='font14 mt-1 capitalize italic'>Confused on which Tests to choose?</p>
                        <Link to={'/tests/1'} className='duration-75 font14 flex w-fit items-center gap-1 radius30 border  border[#DB251B] bg-[#DB251B] text-white py-3 px-3 mt-2 cursor-pointer  hover:bg-white hover:text-[#DB251B]' >
                            <span className='font13'>
                                Explore All Test
                            </span>
                            <MdArrowRightAlt />
                        </Link>

                    </div>
                </div>}

            </div>



        </div>
    )
}

export default Tests