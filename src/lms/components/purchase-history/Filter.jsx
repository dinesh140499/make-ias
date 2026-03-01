import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import InputField from '../../reusable/InputField'

const tabLink = [
    { id: 1, title: "Pending" },
    { id: 2, title: "Confirmed" },
    { id: 3, title: "Processing" },
    { id: 4, title: "Picked" },
    { id: 5, title: "Shipped" },
    { id: 6, title: "Delivered" },
    { id: 7, title: "Cancelled" },
];

const Filter = () => {
    const [tab, setTab] = useState(1);

    return (
        <div className="sticky top-0 left-0 bg-white z-20 mb-5">
            <h1 className='capitalize mb-7 font22'>Order Management</h1>
            <div className='flex items-center jb'>
                {tabLink.map((item) => (
                    <p
                        key={item.id}
                        onClick={() => setTab(item.id)}
                        className={`text-[#8B909A] border-b-[2px] border-[#8B909A] w-full pb-2 cursor-pointer ${tab === item.id ? 'text-[#DB251B] border-[#DB251B]' : ''}`}
                    >
                        {item.title}
                    </p>
                ))}
            </div>

            {/* Search and Filter */}
            <div className="flex items-center justify-between mt-5">
                <div className='shadow-sm w-fit flex gap-3 items-center rounded-md py-2 px-2 font16'>
                    <CiSearch />
                    <InputField placeholder="Search by order id" className='outline-none text-[#8B909A]' />
                </div>
                <div className='shadow-sm w-fit items-center rounded-md py-2 px-2 font16'>
                    <select className='text-[#8B909A] cursor-pointer font16 outline-none'>
                        <option>Filter by date range</option>
                        <option>Datewise</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter