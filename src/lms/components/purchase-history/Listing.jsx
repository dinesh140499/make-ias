import React, { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io';

const Listing = () => {
    const [actionId, setActionId] = useState(null);
    const [statuses, setStatuses] = useState(Array(10).fill("Pending"));


    const handleAction = (id) => {
        alert(id);
        setActionId(null);
    };

    const handleStatus = (status) => {
        switch (status) {
            case "Pending": return 'text-white bg-[#db251b]';
            case "Confirmed": return 'bg-[#000000] text-white';
            case "Processing": return 'bg-[#FDF416] text-black';
            default: return "bg-[#000000] text-white";
        }
    };
    return (
        <>
            <table width={"100%"} className=' sticky top-40 z-20 bg-white'>
                <thead className='border-b border-[#E9E7FD]  '>
                    <tr>
                        {["Order Id", "Created", "Book", "Total", "Price", "Status", "Action"].map((title, index) => (
                            <th key={index} className='text-left w-1/7 font16 capitalize'>
                                <p className='py-5 text-[#8B909A]'>{title}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
            {/* Table Header */}
            <table width="100%" >

                <tbody>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <tr key={i} className='border-b border-[#E9E7FD]'>
                            <td className='py-5'><span className='font15'>#6548</span></td>
                            <td className='py-5'><span className='capitalize font15'>2 min ago</span></td>
                            <td className='py-5'><span className='capitalize font15'>Joseph Wheeler</span></td>
                            <td className='py-5'><span className='capitalize font15'>$654</span></td>
                            <td className='py-5'>
                                <span className='capitalize font15'>
                                    $154 <span className={`bg-[#DB251B] text-white rounded-sm p-1 font15 ${handleStatus(statuses[i])}`}>16%</span>
                                </span>
                            </td>
                            <td>
                                <select
                                    value={statuses[i]}
                                    onChange={(e) => {
                                        const updated = [...statuses];
                                        updated[i] = e.target.value;
                                        setStatuses(updated);
                                    }}
                                    className={`font15 outline-none cursor-pointer py-2 px-2 rounded-sm ${handleStatus(statuses[i])}`}
                                >

                                    <option className='bg-white text-black'>Pending</option>
                                    <option className='bg-white text-black'>Confirmed</option>
                                    <option className='bg-white text-black'>Processing</option>
                                </select>

                            </td>
                            <td>
                                <span className='capitalize font22 flex justify-center relative'>
                                    <IoIosArrowDropdown
                                        onClick={() => setActionId(i)}
                                        className='cursor-pointer text-[#8B909A]'
                                    />
                                    {actionId === i && (
                                        <div className="absolute left-7 bg-white top-5 z-10 max-w-[100px] w-full shadow rounded-sm text-center duration-75">
                                            <button
                                                className='font16 cursor-pointer w-full p-1 py-2 hover:bg-gray-100'
                                                onClick={() => handleAction(i)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Listing