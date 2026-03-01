import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setTab } from '../../../features/questionpaperSlice'
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
        label: "Optional",
    },
    {
        label: "Exams",
        options: [
            {
                label: "Exam 1"
            },

        ]
    },

]

const Explore = () => {
    const { filter, tab } = useSelector(state => state.questionpaperSlice)
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
        <div className='mt-10 mb-7'>
            <div className="container95">
                <div className="lg:flex items-center justify-between ">
                    <FilterTab tabNames={actionBtn} selectTab={tab} handleFilterDropdown={handleFilterDropdown} handleSelectTab={handleSelectTab} />
                    <div className="flex items-center justify-between gap-3 border border-[#DB251B] radius7 py-2 px-1 w-full lg:w-auto">
                        <IoIosSearch className='font20' />
                        <div className='flex items-center w-full justify-between'>
                            <InputField placeholder={"Search Courses..."} className={"font15 outline-none"} />
                            <MdOutlineFilterAlt className='font20 cursor-pointer'
                            // onClick={() => dispatch(setFilter({modal:true,data:[
                            //     {
                            //         label:"Datewise"
                            //     },
                            //     {
                            //         label:"Timewise"
                            //     },
                            // ]}))}
                            />
                        </div>
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