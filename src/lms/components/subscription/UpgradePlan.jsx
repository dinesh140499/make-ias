import React, { useState } from 'react'

const tabLink = [
    { id: 1, title: "Subscriptions" },
];

const UpgradePlan = () => {
    const [tab, setTab] = useState(1);

    return (
        <div>
            <h1 className='capitalize mb-7 font22'>Account Settings</h1>
            <div className='flex items-center w-full border-b-[1px] border-[#8B909A]'>
                {tabLink.map((item) => (
                    <p
                        key={item.id}
                        onClick={() => setTab(item.id)}
                        className={` border-b-[2px] border-[#0B6DFF]  pb-2 cursor-pointer ${tab === item.id ? 'text-[#DB251B] border-[#0B6DFF]' : ''}`}
                    >
                        {item.title}
                    </p>
                ))}
            </div>

            {/* Search and Filter */}
            <div className="border rounded-md py-3 px-2 border-[#EDEDED] mt-5">
                <h1 className='font20'>Plan: Professional</h1>
                <p className='capitalize font15 text-[#8A8A8A] my-2'>Take your videos to the next level with more features.</p>
                <div className="flex items-center justify-between">
                    <p className='capitalize theme-text-red font20 '>$9.99 / month</p>
                    <button className='border border-[#EDEDED] rounded-md py-2 px-3 cursor-pointer font16 duration-75 hover:bg-[#F1F1F1] hover:text-black'>Upgrade Plan</button>
                </div>
            </div>
        </div>
    )
}

export default UpgradePlan