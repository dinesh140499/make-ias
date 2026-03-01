import React from 'react'
import { Helmet } from 'react-helmet'
import PageBanner from '../../common/Banners/PageBanner'
import banner from '../../assets/images/resources/notes.png'
import { FaRegAddressBook } from 'react-icons/fa'
import Explore from '../../components/resources/short-notes/Explore'
import List from '../../components/resources/short-notes/List'

const ShortNotes = () => {
    return (
        <>
            <Helmet>
                <title>Short Notes</title>
            </Helmet>
            {/* Common Banner */}
            <PageBanner title={"Free Study Materials and Notes"} subTitle={"Notes"} bannerImg={banner} Icon={FaRegAddressBook} />
            <Explore />
            <List />
        </>
    )
}

export default ShortNotes