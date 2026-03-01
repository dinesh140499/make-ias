import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setTab } from '../../../features/coursesSlice'
import FilterTab from '../../../reusable/FilterTab'
import { IoIosSearch } from 'react-icons/io'
import InputField from '../../../reusable/InputField'
import { MdOutlineFilterAlt } from 'react-icons/md'
import FilterPopup from '../../../reusable/FilterPopup'

const actionBtn = [

    {
        label: "Prelims",
    },

    {
        label: "Mains",
    },
    {
        label: "Exams",
        options: [
            {
                label: "test 1"
            },

        ]
    },
    {
        label: "Optional",

    },

]

const Explore = () => {
    const { filter, tab } = useSelector(state => state.coursesSlice)
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
        <div className='mt-5 lg:mt-10 mb-7'>
            <div className="container95">
                <div className="items-center justify-between lg:flex">
                    <FilterTab tabNames={actionBtn} selectTab={tab} handleFilterDropdown={handleFilterDropdown} handleSelectTab={handleSelectTab} />
                    <div className="mt-5 flex items-center justify-between gap-3 border border-[#DB251B] radius7 py-2 px-1 w-full lg:w-auto">
                        <div className="flex items-center gap-1">
                            <IoIosSearch className='text-2xl' />
                            <InputField placeholder={"Search Courses..."} className={"text-lg outline-none"} />
                        </div>
                        <MdOutlineFilterAlt className='text-2xl cursor-pointer'
                        // onClick={() => dispatch(setFilter({modal:true,data:[
                        //     {
                        //         label:"Datewixse"
                        //     },
                        //     {
                        //         label:"Timewise"
                        //     },
                        // ]}))}
                        />
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
        </div>
    )
}

export default Explore