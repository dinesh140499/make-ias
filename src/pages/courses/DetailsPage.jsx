import React from 'react'
import PageBanner from '../../common/Banners/PageBanner'
import Content from '../../components/courses/details/Content'
import courseBanner from '../../assets/images/courses/courses.png'
import { FaRegAddressBook } from "react-icons/fa";
import List from '../../components/courses/details/List';
import { Helmet } from 'react-helmet';



const DetailsPage = () => {
    return (
        <>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <PageBanner title={"Explore Our Courses"} subTitle={"Courses"} bannerImg={courseBanner} Icon={FaRegAddressBook} />
            <Content />
            <List />
        </>
    )
}

export default DetailsPage