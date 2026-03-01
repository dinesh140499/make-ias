// Test.jsx
import React from 'react';
import SectionHeading from '../../../common/heading/SectionHeading';
import SectionHeadingMobile from '../../../common/heading/mobile/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import SwiperComponent from '../../../reusable/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import useIsMobile from '../../../customHook/useIsMobile'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const testi = [
    {
        id: 1,
        msg: "MakeIAS Test Series has played an immense role in improving my Answer Writing Skills. Daily Tests writing & Rigorous analysis of Explanations provided by MakeIAS has definitely Helped me in understanding the core demand of The UPPCS Exam. I hereby thanks the entire MakeIAS team for providing such quality of demand centric content that acted as a boon after the prelims exam.",
        imgSrc: "",
        name: "Satwik Srivastava (Rank-3 UPPCS 2023)",
        designation: "Deputy Collector"
    },
    {
        id: 2,
        msg: "I joined Make IAS for Mains Answer writing in August 2023 and with each paper I gained confidence to frame answers in a better way. Evaluation of papers were very broad and on-point. Questions of mock paper helped me a lot while writing actual papers. The biggest benefit of writing mocks was I attempted all the questions in mains whether I knew the answer or not. Thanks to Make IAS team for helping me in achieving my career goal. Thank you!",
        imgSrc: "",
        name: "Anjani Yadav (Rank-12 UPPCS 2023)",
        designation: "Deputy Collector"
    },
    {
        id: 3,
        msg: "I am Pratiksha Tripathi, Rank 20 in UPPSC 2022. I had enrolled in Prelims test series and Daily answer Writing program at MAKE IAS under guidance of MUKUL SIR. The quality of test series feedback and guidance was very good. I am really thankful to MUKUL SIR, TARIQ SIR and other staff for their entire support to achieve my dream. Thank you Make IAS Team. Thanks & regards.",
        imgSrc: "",
        name: "Pratiksha Tripathi (Rank-20 UPPCS 2022)",
        designation: "Deputy Collector"
    },
    {
        id: 4,
        msg: "I would like to thank the Make IAS Team & Mukul Sir for their Daily Answer Writing Program Which helped me improve my Answer writing Skills specially in GS Papers. Their Model answer provided specific points to cover various topics mentioned in the GS syllabus of UPPCS.",
        imgSrc: "",
        name: "Paritosh Mishra (Rank-13 UPPCS 2021)",
        designation: "Deputy Collector"
    },
]

const Testimonial = () => {
    const isMobile = useIsMobile()
    return (
        <section className="testimonial">
            <div className='container95'>
                {isMobile ?
                    <SectionHeadingMobile Icon={FaRegAddressBook} title="Testimonials" subTitle={"What Our Learners Say"} />
                    :
                    <SectionHeading Icon={FaRegAddressBook} title="Testimonials" subTitle={"What Our Learners Say"} />
                }

                <div className="mt-9">
                    <SwiperComponent slides={testi}
                        showNavigation={true}
                        customStyles={{
                            btnPrev:
                                "custom-swiper-prev absolute right-10 -top-25 z-10 p-1 shadow rounded-full cursor-pointer font22 duration-200 bg-[#F5F5F5] text-black duration-75 hover:bg-[#DB251B] hover:text-white active:bg-[#DB251B] active:text-white",
                            btnNext:
                                "custom-swiper-next absolute right-0 -top-25 z-10 p-1 shadow rounded-full cursor-pointer font22 duration-200 bg-[#F5F5F5] text-black duration-75 hover:bg-[#DB251B] hover:text-white active:bg-[#DB251B] active:text-white",
                        }}
                        prevIcon={<GrFormPreviousLink />}
                        nextIcon={<GrFormNextLink />}
                        options={{ pagination: { clickable: false } }}>
                        {testi && testi.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className=' shadow border border-[#f2f2f2] relative bg-white radius7 rounded-tl-[7px] rounded-tr-[7px] h-[300px]'>
                                    <div className='py-3 px-4 h-full'>
                                        {/* <div className="flex items-center gap-1" >
                                <FaRegStar className='font13 theme-text-red' />
                                <FaRegStar className='font13 theme-text-red' />
                                <FaRegStar className='font13 theme-text-red' />
                                <FaRegStar className='font13 theme-para-grey ' />
                                <FaRegStar className='font13 theme-para-grey ' />
                                <span className='font14 font-medium ms-2'>4/5</span>
                            </div> */}
                                        <p className='mt-2 font14'>{slide.msg.slice(0, 300)}...</p>
                                    </div>
                                    <div className='theme-bg-red text-white  flex justify-center items-center py-3 shadow  w-full  rounded-tl-[0] radius7 absolute bottom-0 z-10'>
                                        <div>
                                            <div className='h-[50px] w-[50px] flex justify-center items-center theme-text-red bg-white rounded-full mx-auto mb-2'>
                                                <p className='uppercase font14 '>mw</p>
                                            </div>
                                            <div className='text-center'>
                                                <h4 className='capitalize font14'>{slide.name}</h4>
                                                <p className='text-[#FFF5F5] font13'>{slide.designation}</p>
                                            </div>
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



export default Testimonial;
