import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../../common/Banners/PageBanner'
import banner from '../../assets/images/question-paper/banner.png'
import { FaRegAddressBook } from 'react-icons/fa'
import Explore from '../../components/resources/question-paper/Explore'
import List from '../../components/resources/question-paper/List'

const QuestionPaper = () => {
    return (
        <>
            <Helmet>
                <title>Previous Year Question Answer</title>
            </Helmet>
            <PageBanner title={"Explore Previous Year Questions"} subTitle={"Previous Year Question"} bannerImg={banner} Icon={FaRegAddressBook} />
            <Explore />
            <List />
        </>
    )
}

export default QuestionPaper