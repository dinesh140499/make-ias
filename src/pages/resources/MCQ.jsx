import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../../common/Banners/PageBanner'
import List from '../../components/resources/mcq/List'
import Explore from '../../components/resources/mcq/Explore'
import { FaRegAddressBook } from 'react-icons/fa'
import banner from '../../assets/images/resources/mcqs.png'


const MCQ = () => {
    return (
        <>
            <Helmet>
                <title>MCQS</title>
            </Helmet>
            {/* Common Banner */}
            <PageBanner title={"MCQ Based Current Affairs"} subTitle={"MCQS"} bannerImg={banner} Icon={FaRegAddressBook} />
            <Explore />
            <List />
        </>
    )
}

export default MCQ