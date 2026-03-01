import React from 'react'
import SectionHeading from '../../../common/heading/mobile/SectionHeading'
import { FaRegAddressBook } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import affair1 from '../../../assets/images/home/affairs/affair1.png'
import { BiBookReader } from "react-icons/bi";


const Explore = () => {
    return (
        <section className="explore">
            <div className='container95'>
                <SectionHeading Icon={FaRegAddressBook} title={"Explore"} subTitle={"Unlock Knowledge Anytime, Anywhere"} />
                <div className="flex flex-col mt-5">
                    <div className="right flex-1 ">
                        <div className="w-full">
                            <div className="flex theme-bg-red p-4 rounded-t-[10px] w-full justify-between items-center">
                                <h4 className='text-white uppercase text-lg font-[500]'>Upcoming Courses</h4>
                                <GoArrowUpRight className='text-white font20' />
                            </div>
                            <div className="bg-[#dedede1e] overflow-y-scroll h-[300px]">
                                {Array.from({ length: 10 }).map((_, i) => <div key={i} className='px-3 py-2 bg-[#dedede3b] border-b border-[#dededeb0] last:border-b-0 rounded-b-lg '>
                                    <p className='font15 text-lg'>IAS Prelims 2025 - Comprehensive Test Series</p>
                                    <p className='text-[#585858] text-lg'>Start Date : March 1, 2025</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="left mt-10">
                        <div className="w-full">
                            <div className="flex bg-[#272425] p-4 rounded-t-[10px] w-full justify-between ">
                                <h4 className='text-white text-lg font-[500] uppercase'>DIGITAL CURRENT AFFAIRS</h4>
                                <GoArrowUpRight className='text-white text-lg' />
                            </div>
                            <div className="bg-[#dedede1e] overflow-y-scroll h-[300px]">
                                {Array.from({ length: 6 }).map((_, i) =>
                                    <div key={i} className='my-3 px-3 py-2 flex  shadow-md justify-center items-start gap-2 rounded-md'>
                                        <div className='flex  justify-center h-full'>
                                            <img src={affair1} alt="" className='h-full w-[80px]' />
                                        </div>
                                        <div className='flex gap-1 flex-1/4'>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex-2 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-lg">PM-JAY to Cover Gig Workers</h4>
                                                        <p className="theme-para-grey text-lg">
                                                            {"Launched in 2019, JJM was aimed at providing functional household tap connections (FHTC) to provide 55 litre per capita per day drinking water to all rural households in country by 2024.".slice(0, 70) + "..."}
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className=" w-[35px] p-1 theme-bg-red flex items-center justify-center text-white cursor-pointer self-end rounded-sm">
                                                <BiBookReader className="text-[20px]" />
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore