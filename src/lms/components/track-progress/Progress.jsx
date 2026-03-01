import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";

const data = [
    {
        id: 1,
        title: "Total Enrolled",
        total: 50,
        icon: <FaEye />
    },
    {
        id: 2,
        title: "Completed",
        total: 15,
        icon: <FaCheck />
    },
    {
        id: 3,
        title: "Quiz Score",
        total: 50,
        icon: <FaQuestion />
    },
    {
        id: 4,
        title: "Lesson",
        total: 30,
        icon: <MdOutlinePlayLesson />
    },
    {
        id: 5,
        title: "Test",
        total: 30,
        icon: <FaRegNoteSticky />
    },
]

const Progress = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
            {data.map((items, i) =>
                <div key={i} className="shadow-lg radius7 p-3 py-4">
                    <h1>
                        {items.title}
                    </h1>
                    <div className="flex items-center justify-between mt-3 ">
                        <span className='theme-para-grey'>{items.total}</span>
                        <div className="flex items-center justify-between bg-[#1C1D1D] text-white rounded-md p-1">
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Progress