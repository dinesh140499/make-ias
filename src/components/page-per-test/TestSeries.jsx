import React, { useEffect, useState } from 'react'
import FilterPopup from '../../reusable/FilterPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setTab, setInternetStatus } from '../../features/pagePerTestSlice';
import FilterTab from '../../reusable/FilterTab';

const actionBtn = [
    {
        label: "Test",
        options: [
            {
                label: "test 1"
            },

        ]
    },
    {
        label: "Prelims",
    },
    {
        label: "Mains",
        options: [
            {
                label: "main 1"
            },
            {
                label: "main 2"
            }
        ]
    },
    {
        label: "Optional",
        options: [
            {
                label: "option 1"
            },
            {
                label: "option 2"
            }
        ]
    },

]

const TestSeries = () => {
    const { filter, tab, internetStatus } = useSelector(state => state.pagePerTestSlice)
    const dispatch = useDispatch()

    const handleSelectTab = (obj) => {
        dispatch(setTab(obj.label))
    }

    const handleFilterDropdown = (obj) => {
        dispatch(setTab(obj.label))
        dispatch(setFilter({ modal: true, data: obj?.options }))
    }

    useEffect(() => {
        dispatch(setTab(actionBtn[0].label))
    }, [])

    const handleInternetStatus = (item) => {
        dispatch(setInternetStatus(item))
    }

    return (
        <section>
            <div className="container95">
                <div className="flex items-center gap-3 flex-wrap relative justify-center lg:justify-between">
                    <div className='theme-bg-grey radius7'>
                        <FilterTab tabNames={actionBtn} selectTab={tab} handleFilterDropdown={handleFilterDropdown} handleSelectTab={handleSelectTab} />
                    </div>
                    <div className='theme-bg-grey  radius7 flex items-center'>
                        <button
                            className={`flex items-center text-sm w-[80px] lg:w-[150px] lg:text-md font-[500] justify-between capitalize duration-75 hover:bg-[#DB251B] hover:text-white text-black radius7 px-3 py-1 text-center cursor-pointer ${internetStatus === "online" ? "bg-[#DB251B] text-white" : ""}`} onClick={() => handleInternetStatus("online")}>Online</button>
                        <button
                            className={`flex items-center text-sm w-[80px] lg:w-[150px] lg:text-md font-[500] justify-between capitalize duration-75 hover:bg-[#DB251B] hover:text-white text-black radius7 px-3 py-1 text-center cursor-pointer ${internetStatus === "offline" ? "bg-[#DB251B] text-white" : ""}`}
                            onClick={() => handleInternetStatus("offline")}>Offline</button>
                    </div>
                </div>
            </div>
            {(filter.modal && filter?.data?.length >= 1) &&
                <FilterPopup heading={"Heading"} onClose={() =>
                    dispatch(setFilter({ modal: false }))
                }>
                    {filter?.data?.map((items, i) => <div className='flex items-center gap-3 mb-1' key={i}>
                        <input type="checkbox" />
                        <label htmlFor={items.label} className='capitalize'>{items.label}</label>
                    </div>)}
                </FilterPopup>}
        </section>
    )
}

export default TestSeries