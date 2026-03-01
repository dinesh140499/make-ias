import React from 'react'
import PageBanner from '../../common/Banners/PageBanner'
import { FaRegAddressBook } from 'react-icons/fa'
import Banner from '../../assets/images/current-affairs/news.png'
import List from '../../components/current-affairs/List'
import DailyNews from '../../components/current-affairs/DailyNews'
import Popular from '../../components/current-affairs/Popular'
import { Helmet } from 'react-helmet'

const CurrentAffairs = () => {
    return (
        <>
            <Helmet>
                <title>Current Affairs</title>
            </Helmet>
            <PageBanner title={"Digital Current Affairs"} subTitle={"News"} Icon={FaRegAddressBook} bannerImg={Banner} />
            <List />
            <DailyNews />
            <Popular />
        </>
    )
}

export default CurrentAffairs