import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setTab } from '../../features/currentAffairsSlice'
import FilterTab from '../../reusable/FilterTab'
import { IoIosSearch } from 'react-icons/io'
import InputField from '../../reusable/InputField'
import { MdOutlineFilterAlt } from 'react-icons/md'
import FilterPopup from '../../reusable/FilterPopup'
import ListMobile from './mobile/List'
import useIsMobile from '../../customHook/useIsMobile'

const actionBtn = [
  {
    label: "Medium",
    options: [
      {
        label: "Medium 1"
      },

    ]
  },
  {
    label: "Daily Practice",
  },
  {
    label: "Yearly Update",
  },
  {
    label: "Daily Article",
  },
  {
    label: "Mains Value Additional",
  },
  {
    label: "Prelims Facts",
  },
]

const List = () => {
  const { filter, tab } = useSelector(state => state.currentAffairsSlice)
  const dispatch = useDispatch()
  const isMobile = useIsMobile()


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
    <>
      {isMobile ? <ListMobile/> :
        <div className='mt-5 lg:mt-10 mb-7'>
          <div className="container95">
            <div className="flex items-center justify-between ">
              <FilterTab tabNames={actionBtn} selectTab={tab} handleFilterDropdown={handleFilterDropdown} handleSelectTab={handleSelectTab} className={{ div: "gap-0", button: "lg:w-[182px]" }} />
              {/* <div className="flex items-center gap-3 border border-[#DB251B] radius7 py-2 px-1 w-full lg:w-auto">
            <IoIosSearch className='font20' />
            <InputField placeholder={"Search Courses..."} className={"font15 outline-none"} />
            <MdOutlineFilterAlt className='font20 cursor-pointer'
            onClick={() => dispatch(setFilter({modal:true,data:[
                {
                    label:"Datewise"
                },
                {
                    label:"Timewise"
                },
            ]}))}
            />
          </div> */}
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
              <div className="radius7">
                <h3 className='font15 capitalize theme-bg-black text-white'>DAILY CURRENT AFFAIRS</h3>
              </div>
            </FilterPopup>}
        </div>}
    </>
  )
}

export default List