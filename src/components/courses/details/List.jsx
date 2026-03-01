import React from 'react'
import { FaTasks } from "react-icons/fa";
import TableRow from '../../../reusable/TableRows'
import { GrFormView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import ListMobile from './mobile/List'
import useIsMobile from '../../../customHook/useIsMobile';

const List = () => {
    const isMobile = useIsMobile()
    return (
        <>
            {isMobile ? <ListMobile /> :
                <div className='mb-14'>
                    <div className="container95">
                        <div className="flex items-center justify-between">
                            <button className='capitalize flex items-center gap-2 font15 theme-bg-black text-white radius7 py-2 px-5 cursor-pointer'><span> <FaTasks /></span> <span> History</span></button>
                            <button className='capitalize flex items-center gap-2 font15 theme-bg-red text-white radius7 py-2 px-5 cursor-pointer'>Buy Now</button>
                        </div>
                        <table className='w-full mt-4'>
                            <thead>
                                {/* Table Heading */}
                                <tr>
                                    {["Lectures", "Notes", "MCQs", "Main Assignment", "PYQs"].map((items, i) => <TableRow key={i} className={"first:text-left text-center pb-2 pt-4 font16"}>{items}</TableRow>)}
                                </tr>

                                {/* Table Data */}
                                {Array.from({ length: 10 }).map((items, i) =>
                                    <tr >
                                        <TableRow>
                                            <p className='capitalize font13 text-[#006BD9] font-bold'>Welcome Abord</p>
                                            <p className='flex items-center gap-1 text-[12px] theme-text-red cursor-pointer mb-3'><span>
                                                View Syllabus</span> <span><GrFormView className='theme-text-red font16' /></span></p>
                                        </TableRow>
                                        <TableRow>
                                            <p className='flex items-center justify-center gap-1 font22 theme-text-red cursor-pointer '>
                                                <MdOutlineFileDownload />
                                            </p>
                                        </TableRow>
                                        <TableRow>
                                            <p className='font13 text-center text-[#006BD9] cursor-pointer'>
                                                Test 1
                                            </p>
                                        </TableRow>
                                        <TableRow>
                                            <p className='font13 text-center text-[#006BD9] cursor-pointer'>
                                                Welcome Abroad
                                            </p>
                                        </TableRow>
                                        <TableRow>
                                            <p className='font13 text-center text-[#006BD9] cursor-pointer'>
                                                Welcome Abroad
                                            </p>
                                        </TableRow>
                                    </tr>)}
                            </thead>
                        </table>
                    </div>
                </div>}
        </>
    )
}

export default List