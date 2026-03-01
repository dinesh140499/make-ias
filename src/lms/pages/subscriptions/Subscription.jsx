import React from 'react'
import UpgradePlan from '../../components/subscription/UpgradePlan'
import Listing from '../../components/subscription/Listing'
import { Helmet } from 'react-helmet'

const Subscription = () => {
  return (
    <>
      <Helmet>
        <title>Subscription</title>
      </Helmet>
      <div className='container95'>
        <div className=" lg:flex flex-col-reverse lg:flex-row gap-5">
          <div className='flex-1/2'>
            <UpgradePlan />
            <Listing />
          </div>
          {/* Month Selector */}
          <div>
            <div className='flex-1/10 flex flex-col items-center sticky top-0 '>
              <div className="">

                <h1 className='font16'>Current Month Overview</h1>
                <div className="flex gap-3 mt-3 overflow-x-auto w-[240px] current-month-scroll">
                  <div className='text-center h-16 w-16 px-6 flex flex-col justify-center items-center text-black rounded-lg cursor-pointer'>
                    <p>Jan</p>
                    <p>9</p>
                  </div>
                  <div className='text-center bg-[#DB251B] h-16 w-16 px-6 flex flex-col justify-center items-center text-white rounded-lg cursor-pointer'>
                    <p>Feb</p>
                    <p>2</p>
                  </div>
                  <div className='text-center h-16 w-16 px-6 flex flex-col justify-center items-center text-black rounded-lg cursor-pointer'>
                    <p>Apr</p>
                    <p>7</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Subscription