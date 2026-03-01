import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from '../../common/heading/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import SwiperComponent from '../../reusable/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import useIsMobile from '../../customHook/useIsMobile';
import { getTestimonialsRequest } from '../../redux/actions/homeActions';
import LoaderSection from '../../reusable/LoaderSection';

const Testimonial = () => {
    const dispatch = useDispatch();
    const isMobile = useIsMobile();
    const { testimonials, loading } = useSelector((state) => state.home);


    useEffect(() => {
        dispatch(getTestimonialsRequest());
    }, [dispatch]);

    return (
        <div className="testimonial mt-10">
            <div className='container95'>
                <SectionHeading Icon={FaRegAddressBook} title="Testimonials" subTitle={"What Our Learners Say"} />
                {loading ? (
                    <LoaderSection />
                ) : (
                    <div className="mt-5 lg:mt-9">
                        <SwiperComponent slides={testimonials} slidesPerView={1}
                            options={{
                                pagination: { clickable: false },
                                breakpoints: {
                                    1260: { slidesPerView: 3 },
                                },
                            }}>
                            {testimonials?.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className='shadow border border-[#f2f2f2] relative bg-white radius7 rounded-tl-[7px] rounded-tr-[7px] h-[300px] lg:h-[300px]'>
                                        <div className='py-3 px-4 h-full'>
                                            <p className='mt-2 text-md'>{slide.description.slice(0, 300)}...</p>
                                        </div>
                                        <div className='theme-bg-red text-white flex justify-center items-center py-3 shadow w-full rounded-tl-[0] radius7 absolute bottom-0 z-10'>
                                            <div>
                                                <div className='h-[50px] w-[50px] flex justify-center items-center theme-text-red bg-white rounded-full mx-auto mb-2'>
                                                    <p className='uppercase font14'>{slide.name?.charAt(0)}</p>
                                                </div>
                                                <div className='text-center'>
                                                    <h4 className='capitalize text-lg lg:text-sm'>{slide.name}</h4>
                                                    <p className='text-[#FFF5F5] font13'>{slide.post}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonial;
