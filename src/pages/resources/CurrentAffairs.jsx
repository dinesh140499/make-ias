import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../../common/Banners/PageBanner'
import { FaRegAddressBook } from 'react-icons/fa'
import banner from '../../assets/images/resources/current-affair.png'
import Explore from '../../components/resources/current-affairs/Explore'
import List from '../../components/resources/current-affairs/List'

const CurrentAffairs = () => {
    return (
        <>
            <Helmet>
                <title>Current Affairs</title>
            </Helmet>
            <PageBanner subTitle={"Current Affairs"} title={"Explore latest Yearly current affairs"} bannerImg={banner} Icon={FaRegAddressBook} />
            <Explore />
            <List />
        </>
    )
}

export default CurrentAffairs