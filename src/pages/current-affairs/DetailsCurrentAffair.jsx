import React from 'react'
import PageBanner from '../../common/Banners/PageBanner'
import Banner from '../../assets/images/current-affairs/news.png'
import List from '../../components/current-affairs/details-current-affairs/List'

import { FaRegAddressBook } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const PrelimsFacts = () => {
  return (
    <>
      <Helmet>
        <title>Current Affairs</title>
      </Helmet>
      <PageBanner title={"Mains Value Addition Material"} subTitle={"Current Affairs"} Icon={FaRegAddressBook} bannerImg={Banner} />
      <List />
    </>
  )
}

export default PrelimsFacts