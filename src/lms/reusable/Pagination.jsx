import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Pagination = ({ totalItems }) => {
    const totalPages = Math.ceil(totalItems / 10);
    const [page, setPage] = useState(1);

    const handlePageVisit=(id)=>{

    }

    return (
        <div className="flex justify-between w-full">
            <div className='flex items-center gap-2'>
                <p>Showing </p>
                <select
                    value={page}
                    onChange={(e) => setPage(Number(e.target.value))}
                    className='outline-none border border-[#E9E7FD] py-1 px-3 rounded-md'
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <p>Of {totalItems / 10}</p>
            </div>
            <div className='flex items-center gap-1'>
                <GrFormPrevious className='py-1 px-2  bg-[#F1F2F6] rounded-sm text-[32px]  text-[#8B909A] duration-75 cursor-pointer hover:bg-[#DB251B] hover:text-black' />
                {Array.from({ length: totalPages }, (_, i) => (
                    <p key={i} value={i + 1} className='font16 p-1 px-2 rounded-sm cursor-pointer bg-[#F1F2F6] hover:bg-[#DB251B] hover:text-white' onClick={()=>handlePageVisit(i+1)}>
                        {i + 1}
                    </p>
                ))}
                <GrFormNext className='py-1 px-2 text-[32px] bg-[#F1F2F6] rounded-sm   text-[#8B909A] duration-75 cursor-pointer hover:bg-[#DB251B] hover:text-black' />
            </div>
        </div>
    );
};

export default Pagination;
