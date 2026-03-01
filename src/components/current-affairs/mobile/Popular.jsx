import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import img1 from '../../../assets/images/current-affairs/1.png';
import SectionHeadingMobile from '../../../common/heading/mobile/SectionHeading';
import { Link } from 'react-router-dom';
import SwiperComponent from '../../../reusable/SwiperComponent';
import { SwiperSlide } from 'swiper/react';

const slides = [
    { image: img1, alt: "Slide 1", title: "PM-JAY to Cover Gig", para: "Launched in 2019, JJM was aimed at providing..." },
    { image: img1, alt: "Slide 2", title: "PM-JAY to Cover Gig", para: "Launched in 2019, JJM was aimed at providing..." },
    { image: img1, alt: "Slide 3", title: "PM-JAY to Cover Gig", para: "Launched in 2019, JJM was aimed at providing..." },
    { image: img1, alt: "Slide 4", title: "PM-JAY to Cover Gig", para: "Launched in 2019, JJM was aimed at providing..." },
];

const Popular = () => {
    return (
        <div className="explore mt-3 mb-10">
            <div>
                {/* <div className="mb-3">
                    <SectionHeadingMobile subTitle={"Popular Current Affairs"} />
                </div> */}

                {/* Swiper Section */}
                <SwiperComponent slides={slides} slidesPerView={3}>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>

                            <Card imgSrc={slide.image} heading={slide.title} para={slide.para} />
                        </SwiperSlide>
                    ))}
                </SwiperComponent>
            </div>
        </div>
    );
};

const Card = ({ imgSrc, heading, para }) => {
    return (
        <Link to="/current-affairs/1" className='block w-full'>
            <div>
                <img src={imgSrc} className='w-full object-cover rounded-md' alt={heading} />
            </div>
            <h2 className='capitalize mt-2 font16 font-semibold'>{heading}</h2>
            <p className='capitalize font13 theme-para-grey'>{para?.slice(0, 20)}...</p>
        </Link>
    );
};

export default Popular;
