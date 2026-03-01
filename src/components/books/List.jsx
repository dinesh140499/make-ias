import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setTab } from '../../features/currentAffairsSlice'
import FilterTab from '../../reusable/FilterTab'
import FilterPopup from '../../reusable/FilterPopup'
import { IoIosSearch } from 'react-icons/io'
import { MdOutlineFilterAlt } from 'react-icons/md'
import InputField from '../../reusable/InputField'
import img1 from '../../assets/images/book-notes/img1.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { setModal } from '../../features/booknotesSlice'
import Pagination from '../../reusable/Pagination'


const actionBtn = [
    {
        label: "Prelims",
    },
    {
        label: "Mains",
    },
    {
        label: "Medium",
        options: [
            {
                label: "Medium 1"
            },

        ]
    },
]

const List = () => {
    const { filter, tab } = useSelector(state => state.currentAffairsSlice)
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
    return (
        <div className='mt-5 lg:mt-10 mb-10'>
            <div className="container95">
                <div className="lg:flex items-center justify-between w-full">
                    <FilterTab tabNames={actionBtn} selectTab={tab} handleFilterDropdown={handleFilterDropdown} handleSelectTab={handleSelectTab} className={{ div: "gap-0", button: "w-[182px]" }} />
                    <div className="flex items-center gap-3 border border-[#DB251B] radius7 py-3 lg:py-2  px-1 w-full lg:w-auto justify-between">
                        <div className='flex items-center justify-between gap-2'>
                            <IoIosSearch className='text-2xl lg:text-lg' />
                            <InputField placeholder={"Search Courses..."} className={"text-lg lg:text-sm  outline-none"} />
                        </div>
                        <MdOutlineFilterAlt className='text-2xl lg:text-lg cursor-pointer'
                            onClick={() => dispatch(setFilter({
                                modal: true, data: [
                                    {
                                        label: "Datewise"
                                    },
                                    {
                                        label: "Timewise"
                                    },
                                ]
                            }))}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 lg:mt-10">
                    {Array.from({ length: 6 }).map((items, i) =>
                        <Card key={i} />)}
                </div>
                <div className='mt-10'>
                    <Pagination />
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

                    {/* Listing */}
                    {/* <div className="radius7">
                        <h3 className='font15 capitalize theme-bg-black text-white'>DAILY CURRENT AFFAIRS</h3>
                    </div> */}
                </FilterPopup>}
        </div>
    )
}


const Card = () => {
    const dispatch = useDispatch()
    const handleHardCopy = () => {
        dispatch(setModal({ modal: true }));
    }
    return (
        <div className='border radius7 flex flex-wrap lg:flex-nowrap  gap-3 p-3'>
            <div className='w-full radius7'>
                <img src={img1} alt="" className='h-full w-full radius7' />
            </div>
            <div>
                <div className='w-full'>
                    <h3 className='capitalize text-left text-lg lg:text-sm '>MODERN INDIAN HISTORY - Part 1 : First Edition(2024) , English</h3>
                </div>
                <div className='mt-2 cursor-pointer flex items-center justify-between radius7 border border-[#DB251B] py-1 px-3 hover:bg-[#DB251B] hover:text-white'>
                    <a className='font-medium' href={img1} download="ebook.png" target="_blank" rel="noopener noreferrer">
                        <span className='text-lg lg:text-sm '>₹200.00</span>
                        <span className='ms-3 text-lg lg:text-sm'>E-Book</span>
                    </a>
                    <MdOutlineFileDownload className='text-lg lg:text-sm ' />
                </div>
                <div className='mt-2 cursor-pointer flex items-center justify-between radius7 border border-[#DB251B] py-1 px-3 hover:bg-[#DB251B] hover:text-white' onClick={handleHardCopy}>
                    <p>
                        <span className='text-lg lg:text-sm '>₹400.00</span>
                        <span className='ms-3 text-lg lg:text-sm '>Hardcopy</span>
                    </p>
                    <FiBook className='text-lg lg:text-sm' />
                </div>
            </div>
        </div>
    )
}

export default List