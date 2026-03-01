import React from 'react'
import { LiaSmsSolid } from "react-icons/lia";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import rightImg from '../../assets/images/courses/1.png'

const data = [
    {
        id: 1,
        icon: <LiaSmsSolid />,
        title: "HCI Discussion",
        date: "23rd Apr 2022, Tuesday"
    },
    {
        id: 2,
        icon: <RiCodeSSlashFill />,
        title: "Assembly Programming",
        date: "24th Apr 2022, Wednesday"
    },
    {
        id: 3,
        icon: <FaPencilAlt />,
        title: "Automata Theory",
        date: "25th Apr 2022, Thursday"
    },
]

const Right = () => {
    return (
        <div>
            <div>
                <h1 className='text-lg text-center mt-5 mb-5'>Upcoming Courses</h1>
                {data?.map((item, i) =>
                    <div key={i} className="radius7 p-3 bg-[#F5F5F5] flex gap-3 mb-3 last:mb-0">
                        <div className="h-10 w-10 radius7 bg-white flex items-center justify-center font22">
                            {item.icon}
                        </div>
                        <div className=''>
                            <h1 className='font14 capitalize'>{item.title}</h1>
                            <p className='font13 theme-para-grey capitalize'>{item.date}</p>
                        </div>
                    </div>)}
            </div>
            <div className='p-3 bg-[#F5F5F5] radius7 mt-10 flex items-center mb-10 lg:mb-0'>
                <div>
                    <h1 className='capitalize'>Learn even more!</h1>
                    <p className='mt-3 font14'>Unlock premium features
                        for more resources.</p>
                    <button className='capitalize bg-[#DB251B] font14 py-2 px-3 radius7 text-white mt-3 cursor-pointer'>Go Premium</button>
                </div>
                <img src={rightImg} alt="" />
            </div>
        </div>
    )
}

export default Right