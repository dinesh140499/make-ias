import React from 'react'
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <nav className='theme-bg-red flex items-center justify-center lg:justify-between'>
            <div className="flex items-center bg-[#C31B12] text-white  gap-1 py-2  px-5 w-full justify-center lg:justify-start lg:w-fit font13">
                <IoMdCall />
                <Link to={"tel:+919899282199"} className='d-inline-block '>+919899282199, </Link>
                <Link to={"tel:+919899282107"} className='d-inline-block '>+919899282107</Link>
            </div>
            <div className="hidden lg:flex items-center  text-white  gap-1 py-2 px-5 w-fit font13">
                <IoMdCall />
                <p className='uppercase'>UPPCS - MAINS ENRICHMENT PROGRAM - I & I + | UPPSC - MAINS ENRICHMENT PROGRAM - II & II + | UPPSC - MAINS EN UPPCS - MAINS ENRI</p>
            </div>
        </nav>
    )
}

export default TopNavbar