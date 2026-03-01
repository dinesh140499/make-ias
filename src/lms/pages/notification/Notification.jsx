import React from 'react'
import img1 from '../../assets/images/notification/1.png'
import img2 from '../../assets/images/notification/2.png'
import { MdArrowForwardIos } from "react-icons/md";
import { Helmet } from 'react-helmet';

const Notification = () => {
    return (
        <>
            <Helmet>
                <title>Notifications</title>
            </Helmet>
            <div className="container95">
                <div className='rounded-md p-1 shadow-md bg-white h-[85vh] py-3'>
                    <div className="flex items-center gap-3 py-5 px-5 bg-[#582BE8] shadow-md text-white border-b-[2px] border-[#F1F4F9] rounded-md  cursor-pointer ">
                        <div className='w-[45px] h-[45px] flex justify-center items-center'>
                            <img src={img1} alt={"img"} />
                        </div>
                        <div className='flex-1/1'>
                            <p className='font15 capitalize'>We released some new features</p>
                            <p></p>
                            <p className='font13 text-white'>Check them out!</p>
                        </div>
                        <MdArrowForwardIos />
                    </div>
                    {Array.from({ length: 15 }).map((_, i) =>
                        <div key={i} className="flex gap-3 py-5 border-b-[2px] border-[#F1F4F9] hover:bg-green-50 rounded-md rounded-b-none cursor-pointer">
                            <div className='w-[45px] h-[45px] flex justify-center items-center'>
                                <img src={img1} alt={"img"} />
                            </div>
                            <div className='flex-1/1'>
                                <h1>Brian Griffin <span className='font-light'>wants to collaborate</span></h1>
                                <p></p>
                                <p className='font13 theme-para-grey'>5 days ago</p>
                            </div>
                        </div>)}
                    <div className="flex gap-3 py-5 border-b-[2px] border-[#F1F4F9] hover:bg-green-50 rounded-md rounded-b-none cursor-pointer">
                        <div className=' w-[45px] h-[45px] flex justify-center items-center'>
                            <img src={img2} alt={"img"} />
                        </div>
                        <div className='flex-1/1'>
                            <p className='font15 capitalize'>Hey Peter, we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.</p>
                            <p className='font13 theme-para-grey'>5 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification