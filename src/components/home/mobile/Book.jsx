// Test.jsx
import React from 'react';
import SectionHeading from '../../../common/heading/mobile/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import book1 from '../../../assets/images/home/book/book1.png';
import SwiperComponent from '../../../reusable/SwiperComponent';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { SwiperSlide } from 'swiper/react';

const Book = () => {
    return (
        <section className="book">
            <div className="container95">
                <div className="flex items-end justify-between">
                    <div className="flex justify-between items-start flex-1/2">
                        <div>
                            <SectionHeading
                                Icon={FaRegAddressBook}
                                title="Books"
                                subTitle="Explore Our Books & Notes"
                            />
                        </div>
                    </div>
                    <button className='capitalize theme-text-red cursor-pointer text-lg flex-1/2 text-right'>See all Videos</button>

                </div>

                <div className="mt-4">
                    <SwiperComponent
                        slidesPerView={1}
                        showNavigation={true}
                        customStyles={{
                            btnPrev:
                                "custom-swiper-prev absolute right-10 -top-20 z-10 p-1 shadow rounded-full cursor-pointer font22 duration-200 bg-[#F5F5F5] text-black hover:bg-[#DB251B] hover:text-white active:bg-[#DB251B] active:text-white",
                            btnNext:
                                "custom-swiper-next absolute right-0 -top-20 z-10 p-1 shadow rounded-full cursor-pointer font22 duration-200 bg-[#F5F5F5] text-black hover:bg-[#DB251B] hover:text-white active:bg-[#DB251B] active:text-white",
                        }}
                        prevIcon={<GrFormPreviousLink />}
                        nextIcon={<GrFormNextLink />}
                        options={{
                            pagination: { clickable: false },
                            breakpoints: {
                                1024: { slidesPerView: 1 },
                                1260: { slidesPerView: 2 },
                            },
                        }}
                    >
                        {[...Array(4)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="border border-[#DEDEDE] p-2 rounded-lg bg-[#FCFCFC]">
                                    <div className="flex gap-3">
                                        <div className="img_box">
                                            <img src={book1} className="h-full w-full" alt="Book Cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font16 font-[500] mb-3">
                                                MODERN INDIAN HISTORY - Part 1: First Edition (2024), English
                                            </h3>
                                            <button className="flex items-center justify-between border border-[#DB251B] radius7 w-full px-3">
                                                <div className="font14 flex gap-3 items-center font-medium py-[5px]">
                                                    <span>₹ 200.00</span>
                                                    <span>E-book</span>
                                                </div>
                                                <span className="font20 cursor-pointer duration-75 hover:text-red-600">
                                                    <AiOutlineDownload />
                                                </span>
                                            </button>
                                            <button className="flex items-center justify-between border border-[#DB251B] theme-bg-red text-white radius7 w-full px-3 mt-3">
                                                <div className="font14 flex gap-3 items-center font-medium py-[5px]">
                                                    <span>₹ 400.00</span>
                                                    <span>Hardcopy</span>
                                                </div>
                                                <span className="font20 cursor-pointer">
                                                    <LuBookText />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </SwiperComponent>
                </div>
            </div>
        </section>
    );
};

export default Book;
