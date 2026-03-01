import React from 'react';
import SectionHeadingMobile from '../../../common/heading/mobile/SectionHeading';
import TableRows from '../../../reusable/TableRows';
import { GrView } from "react-icons/gr";
import DropdownSelect from '../../../reusable/DropdownSelect'
import InputField from '../../../reusable/InputField'
import { useSelector } from 'react-redux';

const List = () => {
    const { internetStatus } = useSelector(state => state.pagePerTestSlice)

    return (
        <div className='pb-20'>
            <div className="container95">
                <div className="flex items-center justify-between flex-col-reverse">
                    <SectionHeadingMobile subTitle={"all test series of january 2025"} />
                    <div className="flex justify-between items-center gap-2 mb-5 ">
                        <div className='flex items-center gap-1 bg-[#DEDEDE] rounded-sm border'>
                            <DropdownSelect items={[{ name: "English" }, { name: "Hindi" }]} className={{ select: "text-md active:bg-white hover:bg-white active:text-red-500 hover:text-red-500 py-2 rounded-sm font-medium" }} />
                            {internetStatus === "online" ? <DropdownSelect items={[{ name: "Karol Bagh" }, { name: "Punjabi Bagh" }]} className={{ select: " active:bg-white hover:bg-white active:text-red-500 hover:text-red-500 py-2 px-2 rounded-sm font-medium" }} /> : ""}
                        </div>
                        <div className='rounded-sm border'>
                            <InputField type={"date"} className={"py-2 px-1 text-md outline-none font-medium"} />
                        </div>
                    </div>
                </div>
         
                <table width="100%" className='mt-4'>
                    <tbody>
                        {["Test", "Program Details", "Start Date", "Fees"].map((item, i) => (
                            <tr>
                                <th className="text-left text-lg pb-3 capitalize"><span>{item}</span></th>
                                <td className="text-right text-lg pb-3 capitalize">{item + i + 1}</td>
                            </tr>))}
                        <tr>
                            <td>
                                <div className="flex items-center gap-1 capitalize cursor-pointer mt-1">
                                    <h1 className='text-lg theme-text-red'>View Syllabus</h1>
                                    <h1 className='text-lg theme-text-red'><GrView /></h1>
                                </div>
                            </td>
                            <td>
                                <button className='theme-bg-red block w-[120px] ms-auto text-white rounded-sm px-3 py-1 text-sm hover:bg-red-600 transition-all duration-200 cursor-pointer'>
                                    Buy Now
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default List;
