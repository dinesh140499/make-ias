import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'

const FilterTab = ({ tabNames, selectTab, handleFilterDropdown, handleSelectTab, className }) => {
    return (
        <div className={`flex items-center gap-3 theme-bg-grey w-fit  radius7 relative ${className?.div}`}>
            {tabNames?.map((items, i) => (
                <button
                    key={i}
                    onClick={() => handleSelectTab(items)}
                    className={`flex items-center font15 font-[500] justify-between capitalize duration-75 ${className?.button} hover:bg-[#DB251B] hover:text-white text-black radius7 px-3 py-2 w-[150px] cursor-pointer ${selectTab === items.label ? 'theme-bg-red text-white' : ''
                        } ${items.options ? '' : ''}`}

                >
                    {items.label}
                    {items?.options?.length >= 1 && <MdArrowDropDown className="" onClick={() => handleFilterDropdown(items)} />}
                </button>
            ))}
        </div>
    )
}

export default FilterTab
