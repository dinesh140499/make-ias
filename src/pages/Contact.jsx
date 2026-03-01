import React from 'react'
import { Helmet } from 'react-helmet'
import InputField from '../reusable/InputField'
import Textarea from '../reusable/Textarea'
import { FaArrowRightLong } from "react-icons/fa6";

import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="">
                <div className='container95 py-10 h-full'>
                    <div className='text-center'>
                        <h1 className='text-[#DB251B] font22'>Contact Us</h1>
                        <p className='capitalize theme-para-grey text-md lg:text-sm  mb-5 text-[#C9C9C9]'>any question ask here</p>
                    </div>
                    <div className="lg:max-w-[95%] lg:mx-auto h-full radius7 shadow-sm p-3">
                        <div className="lg:flex gap-5">
                            <div className='flex flex-col justify-between theme-bg-red text-white radius7 py-10 px-5 flex-1/7 relative '>
                                <div>
                                    <p className='text-lg'>Contact Information</p>
                                    <p className='capitalize lg:text-sm text-[#C9C9C9] mb-3'>Say something to start a live chat!</p>
                                </div>
                                <div className='flex flex-col gap-3 lg:gap-5'>
                                    <a href="tel:+10123456789" className='text-lg'>
                                        <p className='flex items-center gap-1'> <TbPhoneCall /><span className='text-lg lg:text-sm'> +1012 3456 789</span></p>
                                    </a>
                                    <a href="mailto:demo@gmail.com" className='text-l'><p className='flex items-center gap-1'> <MdOutlineMessage /> <span className='text-ms lg:text-md'>demo@gmail.com</span></p></a>
                                    <p className='text-lg flex  gap-1'> <GrLocation /><span className='text-lg lg:text-sm'> 132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States</span></p>
                                </div>
                                <div className='flex items-center gap-5 mt-3'>
                                    <a href="http://facebook.com/" target='_blank'><p className='text-white h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[#F6AF03] duration-75 hover:bg-white hover:text-black'>
                                        <FaFacebookF />
                                    </p></a>
                                    <a href="https://www.instagram.com/" target='_blank'><p className='text-white h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[#F6AF03] duration-75 hover:bg-white hover:text-black'>
                                        <FaInstagram />
                                    </p></a>
                                    <a href="http://linkedin.com/" target='_blank'><p className='text-white h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[#F6AF03] duration-75 hover:bg-white hover:text-black'>
                                        <FaLinkedinIn />
                                    </p></a>
                                </div>
                            </div>
                            <div className='flex-1/3 lg:py-10 px-3 lg:px-5 pt-10 lg:pb-0'>
                                <div className="flex items-center gap-5">
                                    <div className="w-full ">
                                        <label htmlFor="First Name" className='text-md lg:text-sm'>First Name</label>
                                        <div className='w-full'>
                                            <InputField name={"fname"} id={"fname"} type={"text"} placeholder={""} className={"border-b border-[#8D8D8D] outline-none text-lg lg:text-sm mt-1 w-full"} />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="Last Name" className='text-md lg:text-sm'>Last Name</label>
                                        <div className='w-full'>
                                            <InputField name={"lname"} id={"lname"} type={"text"} placeholder={""} className={"border-b border-[#8D8D8D] outline-none text-lg lg:text-sm w-full mt-1"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 mt-8">
                                    <div className="w-full">
                                        <label htmlFor="Email" className='text-md lg:text-sm '>Email</label>
                                        <div className='w-full'>
                                            <InputField id={"email"} name={"email"} type={"email"} placeholder={""} className={"border-b border-[#8D8D8D] outline-none text-lg lg:text-sm mt-1 w-full"} />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="Phone Number" className='text-md lg:text-sm  '>Phone Number</label>
                                        <div className='w-full'>
                                            <InputField type={"number"} name={"phone"} id={"phone"} placeholder={""} className={"appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none border-b border-[#8D8D8D] outline-none text-lg lg:text-sm w-full mt-1"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 mt-8">

                                    <div className="w-full">
                                        <label htmlFor="Email" className='text-md lg:text-sm'>Select Subject?</label>
                                        <div className="lg:flex items-center lg:gap-5">
                                            <p className='flex items-center gap-2 mt-3'>
                                                <InputField id={"general-enquiry"} name={"general-enquiry"} type={"checkbox"} placeholder={""} checked={true} className={"border-b border-[#8D8D8D] outline-none text-md lg:text-sm  "} />
                                                <label htmlFor="General Enquiry" className='text-lg lg:text-sm'>
                                                    General Enquiry
                                                </label>
                                            </p>
                                            {Array.from({ length: 3 }).map((_, i) =>
                                                <p className='flex items-center gap-2 mt-3'>
                                                    <InputField type={"checkbox"} placeholder={""} className={"border-b border-[#8D8D8D] outline-none text-lg "} />
                                                    <label htmlFor="General Enquiry" className='text-lg lg:text-sm'>
                                                        General Enquiry
                                                    </label>
                                                </p>)}

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 mt-8">
                                    <div className="w-full">
                                        <label htmlFor="message" className='text-md lg:text-sm'>Message</label>
                                        <div className="lg:flex items-center lg:gap-10">
                                            <Textarea rows={"2"} placeholder={"Write Your Message..."} className={"w-full outline-none border-b border-[#8D8D8D] text-lg lg:text-sm mt-2 resize-none"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 w-full flex justify-end">
                                    <button className='flex items-center gap-2 justify-end bg-[#DB251B] text-white rounded-full py-2 px-3 text-md cursor-pointer duration-75 border border-[#DB251B] hover:bg-white hover:text-[#DB251B]'>Send Message <FaArrowRightLong /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact