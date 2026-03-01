import React from 'react'
import { FaRegAddressBook } from "react-icons/fa";

const PageBanner = ({ Icon = FaRegAddressBook, subTitle, title, bannerImg }) => {
    return (
        <div className="lg:bg-[#FFF5F5] flex items-center  w-full pt-10 lg:py-3">
            <div className="container95 w-full">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            {Icon && <Icon className="theme-text-red" />}
                            <span className="theme-text-red uppercase font14">
                                {subTitle} 
                            </span>
                        </div>
                        <h1 className='font22 font-medium mt-1 capitalize'>{title}</h1>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner