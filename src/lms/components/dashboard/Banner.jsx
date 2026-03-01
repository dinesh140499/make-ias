import React from 'react'
import SwiperComponent from '../../reusable/SwiperComponent'
import banner1 from '../../assets/images/dashboard/1.png'
import { SwiperSlide } from 'swiper/react';


const slides = [
    { image: banner1, alt: "Slide 1" },
];

const Banner = () => {
    return (
        <>
            {
                <div>
                    <SwiperComponent slides={slides} slidesPerView={1}>
                        {slides && slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={slide.image}
                                    alt={slide.alt || `Slide ${index + 1}`}
                                    className="w-full  rounded-lg"
                                />
                            </SwiperSlide>
                        ))}

                    </SwiperComponent>
                </div>}
        </>
    )
}

export default Banner