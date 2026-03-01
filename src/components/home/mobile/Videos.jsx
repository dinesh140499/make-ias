import React from 'react';
import SectionHeadingMobile from '../../../common/heading/mobile/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import IframeComponent from '../../../reusable/IframeComponent';
import SwiperComponent from '../../../reusable/SwiperComponent';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { SwiperSlide } from 'swiper/react';

const Videos = () => {
    return (
        <section className="videos">
            <div className="container95">
                <div className="flex justify-between items-end">
                    <div className="flex justify-between items-start ">
                        <div>
                            <SectionHeadingMobile
                                Icon={FaRegAddressBook}
                                title="Test"
                                subTitle={"Latest Test Series"}
                            />
                        </div>

                    </div>
                    <button className='capitalize theme-text-red text-lg cursor-pointer'>See all test series</button>
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
                                <div className="rounded-lg">
                                    <div className="img_box">
                                        <IframeComponent
                                            src="https://www.youtube.com/embed/CoZXoU6qMw8?si=4-ZOqtN2mUH8jq1g"
                                            height="200"
                                        />
                                        <h3 className="font16 font-medium mt-2">
                                            Indo-Pacific and Its Relevance for India | Vishal Salsekar Sir
                                        </h3>
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

export default Videos;
