import React from 'react'
import PageBanner from '../../common/Banners/PageBanner'
import { FaRegAddressBook } from "react-icons/fa";
import courseBanner from '../../assets/images/courses/courses.png'
import Explore from '../../components/courses/explore/Explore';
import List from '../../components/courses/explore/List';
import { Helmet } from 'react-helmet';


const ExploreCourses = () => {
    return (
        <>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <PageBanner title={"Explore Our Courses"} subTitle={"Courses"} Icon={FaRegAddressBook} bannerImg={courseBanner} />
            <Explore />
            <List />
        </>
    )
}

export default ExploreCourses