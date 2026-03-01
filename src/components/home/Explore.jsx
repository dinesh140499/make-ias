import React, { useEffect } from 'react';
import SectionHeading from '../../common/heading/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import affair1 from '../../assets/images/home/affairs/affair1.png';
import { BiBookReader } from "react-icons/bi";
import useIsMobile from '../../customHook/useIsMobile';
import ExploreMobile from '../home/mobile/Explore';
import { requestTest } from '../../redux/actions/homeActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../reusable/LoaderSection'

const Explore = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch()
  const { tests, loading } = useSelector(state => state.home);

  useEffect(() => {
    dispatch(requestTest());
  }, [dispatch]);
  return (
    <>
      <section className="explore ">
        <div className='container95'>
          <SectionHeading
            Icon={FaRegAddressBook}
            title={"Explore"}
            subTitle={"Unlock Knowledge Anytime, Anywhere"}
          />
          <div className="lg:flex mt-5">
            <div className="right flex-1 lg:pr-5">
              <div className="w-full">
                <div className="flex theme-bg-red p-4 rounded-t-[10px] w-full justify-between items-center">
                  <h4 className='text-white uppercase font16 font-[500]'>Upcoming Courses</h4>
                  <GoArrowUpRight className='text-white font20' />
                </div>
                <div className="bg-[#dedede1e] overflow-auto h-[400px]">
                  {loading ? <div className='h-full'>
                    <Loading />
                  </div> : tests.length > 0 ? tests?.map((items, i) => (
                    <div
                      key={i}
                      className='px-3 py-2 bg-[#dedede3b] border-b border-[#dededeb0] last:border-b-0 rounded-b-lg'
                    >
                      <p className='font15 font-medium'>{items?.testName} ({items?.seriesName})</p>
                      <p className='text-[#585858] font14'>Start Date : {new Date(items?.startDate).toLocaleString()}</p>
                    </div>
                  )) : <div className='h-full flex justify-center items-center'>
                    <p>Data Not Available</p>
                  </div>}
                </div>
              </div>
            </div>

            <div className="left flex-2 mt-5 lg:mt-0">
              <div className="w-full">
                <div className="flex bg-[#272425] p-4 rounded-t-[10px] w-full justify-between items-center">
                  <h4 className='text-white font16 font-[500] uppercase'>DIGITAL CURRENT AFFAIRS</h4>
                  <GoArrowUpRight className='text-white font20' />
                </div>
                <div className="bg-[#dedede1e] overflow-y-scroll h-[400px]">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <>
                      {isMobile ? <div key={i} className='my-3 px-3 py-2 flex  shadow-md justify-center items-start gap-2 rounded-md'>
                        <div className='flex  justify-center h-full'>
                          <img src={affair1} alt="" className='h-full w-[80px]' />
                        </div>
                        <div className='flex gap-1 flex-1/4'>
                          <div className="flex flex-col gap-3">
                            <div className="flex-2 flex flex-col justify-between">
                              <div>
                                <h4 className="font-medium text-lg">PM-JAY to Cover Gig Workers</h4>
                                <p className="theme-para-grey text-lg">
                                  {"Launched in 2019, JJM was aimed at providing functional household tap connections (FHTC) to provide 55 litre per capita per day drinking water to all rural households in country by 2024.".slice(0, 70) + "..."}
                                </p>

                              </div>
                            </div>

                          </div>
                          <div className=" w-[35px] p-1 theme-bg-red flex items-center justify-center text-white cursor-pointer self-end rounded-sm">
                            <BiBookReader className="text-[20px]" />
                          </div>
                        </div>
                      </div> :
                        <div key={i} className='px-3 py-2 flex items-start shadow-md justify-center gap-5'>
                          <div className='w-[200px] h-[100px] flex items-center justify-center'>
                            <img src={affair1} alt="" className='w-full h-full object-contain' />
                          </div>
                          <div className="flex h-[100px] gap-3">
                            <div className="flex-2 flex flex-col justify-between">
                              <div>
                                <h4 className="font-medium font16">PM-JAY to Cover Gig Workers</h4>
                                <p className="theme-para-grey font14">
                                  Launched in 2019, JJM was aimed at providing functional household tap connections (FHTC) to provide 55 litre per capita per day drinking water to all rural households in country by 2024.
                                </p>
                              </div>
                            </div>
                            <div className="h-[35px] w-[35px] theme-bg-red flex items-center justify-center text-white cursor-pointer self-end rounded-sm">
                              <BiBookReader className="font22" />
                            </div>
                          </div>
                        </div>
                      }
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
