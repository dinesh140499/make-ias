import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import InputField from '../../reusable/InputField';
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { setModal } from '../../features/booknotesSlice';

const BuyHardcopy = () => {
    const dispatch = useDispatch();
    const [fileName, setFileName] = useState('');

    const handleSubmit = () => {
        dispatch(setModal(false));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    return (
        <div className='h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75 p-2'>
            <div className="bg-white w-full h-full lg:w-[500px] lg:h-[71vh] radius7 z-60 relative cursor-pointer overflow-y-auto">
                <div className='flex justify-between items-center font20 cursor-pointer mb-1 p-2 ' onClick={() => dispatch(setModal(false))}>
                    <h1 className='font20 capitalize'>Fill your details </h1>
                    <IoClose />
                </div>

                <div className="p-2">
                    {/* Name */}
                    <div className="input_box">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <FaRegUser className='theme-text-red' />
                                    <InputField type="text" id={"fname"} name="fname" required={true} placeholder="First Name" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>

                            <div className=' w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <FaRegUser className='theme-text-red' />
                                    {/* <IoMailOutline className='theme-text-red' /> */}
                                    <InputField type="text" id={"lname"} name="lname" required={true} placeholder="Last Name" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Mobile & Email */}
                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <IoCallOutline className='theme-text-red' />
                                    <InputField type="text" id={"mobile"} name={"mobile"} required={true} placeholder="Enter Your Mobile Number" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>

                            <div className=' w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <IoMailOutline className='theme-text-red' />
                                    <InputField type="text" id={"email"} name={"email"} required={true} placeholder="Enter Your Email" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <CiLocationOn className='theme-text-red' />
                                    <InputField type="text" id={"address"} name={"address"} required={true} placeholder="Address" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>


                        </div>
                    </div>

                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <InputField type="number" id={"pincode"} name={"pincode"} required={true} placeholder="Pincode" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>

                            <div className=' w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <InputField type="text" id={"landmark"} name={"landmark"} required={true} placeholder="Landmark" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <InputField type="text" id={"state"} name={"mobile"} required={true} placeholder="State" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>

                            <div className=' w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <InputField type="text" id={"country"} name={"country"} required={true} placeholder="Country" className="font14 w-full outline-none" />
                                </div>
                                {/* <p className='font13 mt-1 theme-text-red' id='error'>Fill Form Correct</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="bg-[#272425] flex items-center gap-3 justify-between mt-3 px-2 py-2 text-white rounded-bl-[7px] rounded-br-[7px]">
                    <div>
                        <span className='font13'>Total Payable</span>
                        <h1 className='font20'>₹ 200.00</h1>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={handleSubmit} className='uppercase theme-bg-red radius30 py-2 px-4 text-white font14 cursor-pointer'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyHardcopy;
