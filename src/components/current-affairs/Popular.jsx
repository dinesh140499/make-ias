import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import img1 from '../../assets/images/current-affairs/1.png'
import SectionHeading from '../../common/heading/SectionHeading';
import { Link } from 'react-router-dom';
import PopularMobile from './mobile/Popular'
import useIsMobile from '../../customHook/useIsMobile'

const Popular = () => {
    const isMobile = useIsMobile()

    return (
        <div className="explore mt-3 mb-3">
            <div className='container95'>
                <div className="mb-3">
                    <SectionHeading subTitle={"Popular Current Affairs"} />
                </div>
                {isMobile ? <PopularMobile /> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {Array.from({ length: 10 }).map((items, i) =>
                        <Card key={i} imgSrc={img1} heading={"PM-JAY to Cover Gig"} para={"Launched in 2019, JJM was aimed at providing..."} />
                    )}
                </div>}
            </div>
        </div>
    )
}

const Card = ({ imgSrc, heading, para }) => {
    return (
        <Link to={"/current-affairs/1"}>
            <div>
                <img src={imgSrc} alt={heading} />
            </div>
            <h2 className='capitalize mt-1 font16'>{heading}</h2>
            <p className='capitalize font13 theme-para-grey'>{para.slice(0, 30)}...</p>
        </Link>
    )
}

export default Popular