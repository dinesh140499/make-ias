
import React from 'react'
import Explore from '../../components/tests/Explore'
import List from '../../components/tests/List'
import PageBanner from '../../common/Banners/PageBanner'
import testBanner from '../../assets/images/tests/banner.png'
import { FaRegAddressBook } from 'react-icons/fa'
import SelectTestSeries from '../../common/modals/SelectTestSeries'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

const Tests = () => {
  const { test_series } = useSelector(state => state.testsSlice)
  return (
    <>
      <Helmet>
        <title>Tests</title>
      </Helmet>
      <PageBanner title={"Tests"} subTitle={"Courses"} Icon={FaRegAddressBook} bannerImg={testBanner} />
      <Explore />
      <List />
      {test_series.modal &&
        <SelectTestSeries />
      }
    </>
  )
}

export default Tests