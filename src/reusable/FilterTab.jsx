import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import FilterTabMobile from './mobile/FilterTab'
import useIsMobile from '../customHook/useIsMobile'

const FilterTab = ({ tabNames, selectTab, handleFilterDropdown, handleSelectTab, className }) => {

    return (
        <>
            {/* {isMobile ? <FilterTabMobile /> :
                <div className={`flex flex-wrap justify-between items-center gap-1 lg:gap-3 lg:bg-[#f9f9f9] lg-w-fit  radius7 relative ${className?.div}`}>
                    {tabNames?.map((items, i) => (
                        <button
                            key={i}
                            onClick={() => handleSelectTab(items)}
                            className={`flex items-center text-md font-[500] justify-between capitalize duration-75 ${className?.button} hover:bg-[#DB251B] hover:text-white text-black radius7 px-2 lg:py-2 py-1 lg:px-3 bg-[#f9f9f9] w-[165px] lg:w-[150px] text-sm cursor-pointer ${selectTab === items.label ? 'theme-bg-red text-white' : ''
                                } ${items.options ? '' : ''}`}
                        >
                            {items.label}
                            {items?.options?.length >= 1 && <MdArrowDropDown className="" onClick={() => handleFilterDropdown(items)} />}
                        </button>
                    ))}
                </div>} */}
            <div className={`flex mb-5 p-1  ${tabNames.length > 3 ? ' gap-1 flex-wrap':'justify-center gap-3'} items-center  lg:gap-3 lg:bg-[#f9f9f9] lg-w-fit  radius7 relative ${className?.div}`}>
                {tabNames?.map((items, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelectTab(items)}
                        className={`flex items-center text-lg font-[500] justify-between capitalize duration-75 ${className?.button} hover:bg-[#DB251B] hover:text-white text-black radius7 px-2 lg:py-2 py-1 lg:px-3 bg-[#f9f9f9] w-[80px] lg:w-[150px] text-sm cursor-pointer ${selectTab === items.label ? 'theme-bg-red text-white' : ''
                            } ${items.options ? '' : ''}`}
                    >
                        {items.label}
                        {items?.options?.length >= 1 && <MdArrowDropDown className="" onClick={() => handleFilterDropdown(items)} />}
                    </button>
                ))}
            </div>
        </>
    )
}

export default FilterTab
