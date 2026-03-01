import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide } from 'swiper/react';

import SwiperComponent from '../../reusable/SwiperComponent';
import LoaderSection from '../../reusable/LoaderSection';
import { requestBanners } from '../../redux/actions/homeActions';
import { IMAGE_BASE_URL } from '../../config/constant';

const Banner = () => {
    const dispatch = useDispatch();
    const { banners, loading } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(requestBanners());
    }, [dispatch]);

    const bannerImages = banners?.bannerImages || [];

    return (
        <div className="max-h-[70vh] h-full ">
            {loading ? (
                <div className='flex justify-center items-center h-[70vh] '>
                    <LoaderSection />
                </div>
            ) : bannerImages.length > 0 ? (
                <SwiperComponent slidesPerView={1}>
                    {bannerImages.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={`${IMAGE_BASE_URL}${banner.image}`}
                                alt={banner.altText || `Banner ${index + 1}`}
                                className="w-full lg:h-full rounded-lg object-cover"
                                title={`Banner ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperComponent>
            ) : (
                <div className='h-full'>
                    <p>No banners found.</p>
                </div>
            )}
        </div>
    );
};

export default Banner;
