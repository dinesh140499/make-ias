import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'


const FilterTab = ({ tabNames, selectTab, handleFilterDropdown, handleSelectTab, className }) => {
    return (
        <div className={`flex flex-wrap justify-between items-center gap-1  radius7 relative ${className?.div}`}>
            {tabNames?.map((items, i) => (
                <button
                    key={i}
                    onClick={() => handleSelectTab(items)}
                    className={`flex items-center text-md font-[500] justify-between capitalize duration-75   hover:bg-[#DB251B] hover:text-white text-black radius7 px-2 lg:py-2 py-1 lg:px-3 bg-[#f9f9f9]  text-md cursor-pointer ${selectTab === items.label ? 'theme-bg-red text-white' : ''
                        } ${items.options ? '' : ''} `}

                >
                    {items.label}
                    {items?.options?.length >= 1 && <MdArrowDropDown className="" onClick={() => handleFilterDropdown(items)} />}
                </button>
            ))}
        </div>
    )
}

export default FilterTab
