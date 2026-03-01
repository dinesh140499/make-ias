import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../../common/Banners/PageBanner'
import banner from '../../assets/images/resources/top-student.png'
import { FaRegAddressBook } from 'react-icons/fa'
import Explore from '../../components/resources/top-students/Explore'
import List from '../../components/resources/top-students/List'

const TopStudents = () => {
    return (
        <>
            <Helmet>
                <title>Topper Answers Copies</title>
            </Helmet>
            {/* Common Banner */}
            <PageBanner title={"Toppers Answer Copies"} subTitle={"Top Students"} bannerImg={banner} Icon={FaRegAddressBook} />
            <Explore />
            <List />
        </>
    )
}

export default TopStudents