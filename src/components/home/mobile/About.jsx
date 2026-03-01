import React, { useState } from 'react'
import { FaRegAddressBook } from "react-icons/fa";
import InputField from '../../../reusable/InputField';
import Textarea from '../../../reusable/Textarea';
import SectionHeading from '../../../common/heading/mobile/SectionHeading';
import { IoMdArrowDropdown } from "react-icons/io";


const About = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <section className="about">
                <div className='container95'>
                    <div className="flex flex-col">
                        <div className="left ">
                            <div className="bg-[#FFFBD6] py-3 px-2 flex items-center justify-between" onClick={() => setToggle(!toggle)}>
                                <SectionHeading Icon={FaRegAddressBook} title={"About Us"} />
                                <IoMdArrowDropdown className='text-2xl theme-text-red'/>
                            </div>

                            {toggle &&
                                <div className='mt-5 bg-[#FFFBD6] p-3'>
                                    <span className="font20 mt-1 capitalize inline font-medium">Your Trusted Companion for IAS Preparation</span>
                                    <p className='theme-text-grey text-justify mt-2  text-lg  theme-para-grey'>
                                        We are committed to being the ultimate companion for IAS aspirants, offering a seamless and comprehensive platform tailored for success in the UPSC exams. Our carefully designed learning ecosystem includes expertly curated courses, live and pre-recorded sessions, and comprehensive test series that cover both Prelims and Mains preparation. With personalized mentorship from experienced educators and up-to-date digital current affairs, we ensure aspirants stay informed and confident throughout their journey. Our platform provides rank-based performance analytics, helping students identify their strengths and areas for improvement, while our easy access to high-quality study materials ensures learning is both effective and efficient. Whether it’s accessing premium study resources, scheduling tests, or reviewing performance reports, we strive to make the learning experience smooth, accessible, and impactful. Join thousands of successful aspirants who trust us to guide them towards achieving their dreams of becoming a civil servant. Your success is our mission.
                                    </p>
                                </div>}
                        </div>
                        <div className="right mt-5">
                            <div className=" theme-bg-red rounded-lg p-4">
                                <form action="" className='text-white'>
                                    <h4 className='uppercase text-md text-left'>Get In Touch</h4>
                                    <h3 className='text-2xl font-lg mt-1'>Request Call Back</h3>
                                    <InputField type={"text"} name={"fname"} id={"fname"} className={"bg-white text-black text-lg py-2 px-2 w-full rounded-sm mt-4"} placeholder={"Your Name"} required={true} />
                                    <InputField type={"email"} name={"email"} id={"email"} className={"bg-white text-black text-lg py-2 px-2 w-full rounded-sm mt-4"} placeholder={"Your Email"} required={true} />
                                    <InputField type={"number"} id={"phone"} name={"phone"} className={"bg-white text-black text-lg py-2 px-2 w-full rounded-sm mt-4"} placeholder={"Phone"} required={true} />
                                    <Textarea rows={"4"} id={"message"} name={"message"} placeholder={"Message"} required={true} className={"w-full resize-none bg-white mt-3 rounded-sm text-black text-sm py-2 px-2"} />
                                    <button className='w-full mt-4 theme-bg-black py-2 px-2 rounded-sm text-lg cursor-pointer'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About