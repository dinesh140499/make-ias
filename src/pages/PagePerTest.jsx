import React from 'react'
import PageBanner from '../common/Banners/PageBanner'
import banner from '../assets/images/pageperview/banner.png'
import { FaRegAddressBook } from "react-icons/fa";
import TestSeries from '../components/page-per-test/TestSeries';
import TestSeriesMobile from '../components/page-per-test/mobile/TestSeries';
import List from '../components/page-per-test/List';
import ListMobile from '../components/page-per-test/mobile/List';
import { Helmet } from 'react-helmet';
import useIsMobile from '../customHook/useIsMobile';


const PagePerTest = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <Helmet>
        <title>Page Per Test</title>
      </Helmet>
      {/* Common Banner */}
      {/* {
        isMobile ?
          <>
            <TestSeriesMobile />
            <ListMobile />
          </> :
          <>
            <PageBanner title={"Pay Per Test"} subTitle={"Test"} bannerImg={banner} Icon={FaRegAddressBook} />
            <TestSeries />
            <List />
          </>
      } */}
      <div className='hidden lg:block'>
        <PageBanner title={"Pay Per Test"} subTitle={"Test"} bannerImg={banner} Icon={FaRegAddressBook} />
      </div>
      <TestSeries />
      <List />
    </>
  )
}

export default PagePerTest