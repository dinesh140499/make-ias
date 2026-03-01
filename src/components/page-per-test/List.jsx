import React from 'react';
import SectionHeading from '../../common/heading/SectionHeading';
import TableRows from '../../reusable/TableRows';
import { GrView } from "react-icons/gr";
import DropdownSelect from '../../reusable/DropdownSelect'
import InputField from '../../reusable/InputField'
import { useSelector } from 'react-redux';

const List = () => {
    const { internetStatus } = useSelector(state => state.pagePerTestSlice)

    return (
        <div className='pb-20'>
            <div className="container95">
                <div className="flex items-center justify-between">
                    <div className='hidden lg:block'>
                        <SectionHeading subTitle={"all test series of january 2025"} />
                    </div>
                    <div className='block lg:hidden'>
                        <SectionHeading subTitle={"Tests"} />
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className='flex items-center gap-1 bg-[#DEDEDE] rounded-sm border'>
                            <DropdownSelect items={[{ name: "English" }, { name: "Hindi" }]} className={{ select: "font14 active:bg-white hover:bg-white active:text-red-500 hover:text-red-500 py-2 px-2 rounded-sm font-medium" }} />
                            {internetStatus === "online" ? <DropdownSelect items={[{ name: "Karol Bagh" }, { name: "Punjabi Bagh" }]} className={{ select: "font14 active:bg-white hover:bg-white active:text-red-500 hover:text-red-500 py-2 px-2 rounded-sm font-medium" }} /> : ""}

                        </div>
                        <div className='rounded-sm border'>
                            <InputField type={"date"} className={"py-2 px-2 text-sm outline-none font-medium"} />
                        </div>
                    </div>
                </div>
                <table className='w-full mt-7 rounded-2xl overflow-hidden border border-[#DEDEDE]'>
                    <thead className='bg-[#FCFCFC]'>
                        <tr>
                            {["Test", "Program Details", "Start Date", "Fees", "Payment"].map((item, i) => (
                                <TableRows key={i} className="py-3 font15 w-1/5 text-left hidden lg:table-cell">
                                    <h4>
                                        {item}
                                    </h4>
                                </TableRows>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 4 }).map((_, rowIndex) => (
                            <tr key={rowIndex} >
                                {/* Column 1: Test Name + View Syllabus */}
                                <TableRows className="w-1/4 text-left  py-3 align-middle">
                                    <div>
                                        <h1 className='font-light text-lg lg:text-sm capitalize'>All India GS Prelims Test Series</h1>
                                        <div className="flex items-center gap-1 capitalize cursor-pointer mt-1">
                                            <h1 className=' theme-text-red text-md lg:text-sm'>View Syllabus</h1>
                                            <span className=' theme-text-red text-md lg:text-sm'><GrView /></span>
                                        </div>
                                    </div>
                                </TableRows>

                                {/* Column 2, 3, 4 */}
                                {["35 test", "20 feb 2025", "₹16000"].map((item, i) => (
                                    <TableRows key={i} className="w-1/5 text-left  py-3 align-middle hidden lg:table-cell">
                                        <p className="font-light font14 capitalize">{item}</p>
                                    </TableRows>
                                ))}

                                {/* Column 5: Button */}
                                <TableRows className="w-1/5 text-left  py-3 align-middle hidden lg:table-cell">
                                    <button className='theme-bg-red text-white rounded-sm px-3 py-1 text-sm hover:bg-red-600 transition-all duration-200 cursor-pointer '>
                                        Buy Now
                                    </button>
                                </TableRows>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
