import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const pageLinks = [
    {
        id: 1,
        name: "Current Affairs Monthly Basis",
        new: true,
        link: "/current-affair-monthly-base"
    },
    {
        id: 2,
        name: "Previous Question Paper",
        link: "/previous-year-question-paper"
    },
    {
        id: 3,
        name: "Previous Answer Copy",
        link: "/"
    },
    {
        id: 4,
        name: "Toppers Answer Copy",
        link: "/toppers-answer-copies"
    },
    {
        id: 5,
        name: "Short Notes",
        link: "/short-notes"
    },
    {
        id: 6,
        name: "MCQ Based Monthly Current Affairs",
        link: "/mcqs"
    },
]

const Resources = ({itemsData}) => {
    return (
        <div className='absolute top-14 right-40 w-fit max-h-[40vh] bg-white z-50 shadow radius7 p-3 overflow-y-auto ' >
            {itemsData?.map(items => <Link to={items.link} key={items.id} className='flex items-start font14 py-[5px] border-b border-b-[white] duration-75 hover:text-[#DB251B]'><p>{items.name} {items?.new && <span className='text-[10px] radius7 theme-text-red px-[3px]'>New</span>}</p></Link>)}
        </div>
    )
}

export default Resources