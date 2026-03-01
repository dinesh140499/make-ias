import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import affair1 from '../../assets/images/home/affairs/affair1.png'
import { BiBookReader } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../../customHook/useIsMobile'
import DailyNewsMobile from './mobile/DailyNews'


const DailyNews = () => {
    const navigate = useNavigate()
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile ? <DailyNewsMobile/> :
                <div className="explore mb-8">
                    <div className='container95'>

                        <div className="flex lg:flex-row mt-5 gap-5 flex-wrap">
                            <div className="left lg:flex-2 ">
                                <div className="w-full">
                                    <div className="flex bg-[#272425] py-2 px-2 lg:p-4 rounded-t-[10px] w-full justify-between items-center">
                                        <h4 className='text-white font16 font-[500] uppercase'>DIGITAL CURRENT AFFAIRS</h4>
                                        <GoArrowUpRight className='text-white font20' />
                                    </div>
                                    <div className="bg-[#dedede1e] overflow-y-auto lg:h-[400px]">
                                        {Array.from({ length: 6 }).map((_, i) =>
                                            <div key={i} className='text-center px-3 py-2 my-3 flex items-start shadow-md  justify-center gap-5 flex-wrap lg:flex-nowrap'>
                                                <div className='w-[200px] h-[100px] flex items-center justify-center'>
                                                    <img src={affair1} alt="" className='w-full h-full object-contain' />
                                                </div>
                                                <div className="flex lg:h-[100px] gap-3">
                                                    <div className="flex-2 flex flex-col justify-between">
                                                        <div>
                                                            <h4 className="font-medium font16">PM-JAY to Cover Gig Workers</h4>
                                                            <p className="theme-para-grey font14">
                                                                Launched in 2019, JJM was aimed at providing functional household tap connections (FHTC) to provide 55 litre per capita per day drinking water to all rural households in country by 2024.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[35px] w-[35px] theme-bg-red flex items-center justify-center text-white cursor-pointer self-end rounded-sm" onClick={() => navigate("/current-affairs/material")}>
                                                    <BiBookReader className="font22 " />
                                                </div>

                                            </div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="right flex-1 pr-5 radius7 shadow bg-[#dedede1e] ">
                                <div className="w-full px-3">
                                    <div className="flex py-4 rounded-t-[10px] w-full justify-between items-center">
                                        <h4 className='text-black uppercase font16 font-[500]'>What’s New</h4>
                                        <button className='text-black font13 cursor-pointer'>View All</button>
                                    </div>
                                    <div className=" h-[200px]">
                                        <p className='font14 my-1'>Announcements</p>
                                        <p className='font13 theme-para-grey '>Synopsis</p>
                                        <article className='theme-para-grey font13'>
                                            <p>Stock market crash today: Indian equity indices fell for the fifth day, driven down by banking, auto, metal, and IT stocks. Contributing factors include U.S. trade policy, weak earnings, and foreign investor selling. President Trump's tariff hike on steel and aluminum, nervousness ahead of Fed Chair Powell’s testimony, and high U.S. bond yields added to the market's decline.</p>
                                        </article>
                                        <div className='h-full flex items-center justify-center border-t mt-3'>
                                            <h3 className='font22 uppercase'>Ad Slot</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>}
        </>
    )
}

export default DailyNews