import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from '../../common/heading/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import IframeComponent from '../../reusable/IframeComponent';
import VideosMobile from './mobile/Videos';
import useIsMobile from '../../customHook/useIsMobile';
import { getSampleVideoRequest } from '../../redux/actions/homeActions';

const Videos = () => {
    const dispatch = useDispatch();
    const isMobile = useIsMobile();

    const { sampleBlogs, loading } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getSampleVideoRequest());
    }, [dispatch]);

    return (
        <>
            {isMobile ? (
                <VideosMobile />
            ) : (
                <section className="videos">
                    <div className="container95">
                        <SectionHeading Icon={FaRegAddressBook} title="Videos" subTitle="Explore Sample Videos" />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-9">
                            {sampleBlogs?.map((blog, i) => (
                                <div className="rounded-lg" key={blog._id || i}>
                                    <div className="img_box">
                                        <IframeComponent src={blog.url} height="200" />
                                        <h3 className="font16 font-medium mt-2">{blog.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Videos;
