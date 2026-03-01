import React, { useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import DropdownSelect from '../../../reusable/DropdownSelect'

const months = [
  { name: "Jan", value: 35, color: "#f6961e" },
  { name: "Feb", value: 45, color: "#ecdb23" },
  { name: "Mar", value: 60, color: "#aee228" },
  { name: "Apr", value: 25, color: "#f6961e" },
  { name: "May", value: 70, color: "#aee228" },
  { name: "Jun", value: 40, color: "#ecdb23" },
  { name: "Jul", value: 55, color: "#ecdb23" },
  { name: "Aug", value: 50, color: "#ecdb23" },
  { name: "Sep", value: 65, color: "#aee228" },
  { name: "Oct", value: 75, color: "#aee228" },
  { name: "Nov", value: 80, color: "#6ad72d" },
  { name: "Dec", value: 90, color: "#6ad72d" }
]

const Performance = () => {
  const [selectedMonth, setSelectedMonth] = useState()

  const handleSelect = (e) => {
    setSelectedMonth(e.target.value)
  }

  const selectedData = months.find(item => item.name === selectedMonth)
  const selectedValue = selectedData ? selectedData.value : 0

  return (
    <div className='w-full lg:w-auto'>
      <h1>Performance</h1>
      <div className="border border-[#E5E7E9] rounded-md p-3 mt-3">
        <div className="flex items-center gap-3 justify-between">
          <div className='flex items-center gap-3'>
            <div
              className="h-[20px] w-[20px] radius7"
              style={{ backgroundColor: selectedData?.color || '#ff471a' }}
            ></div>
            <h1 className='font14 text-[#42404C]'>Progress</h1>
          </div>
          <DropdownSelect
            category="Monthly"
            items={months.map(m => ({ name: m.name }))}
            className={{ select: 'text-[#42404C] font14 bg-[#EFF1F3] radius7 py-2 px-3' }}
            onChange={handleSelect}
          />
        </div>

        <div className='mt-5'>
          <ReactSpeedometer
            minValue={0}
            maxValue={100}
            value={selectedValue}
            height={200}
            width={250}
          />
        </div>
      </div>
    </div>
  )
}

export default Performance
