import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setBookMentor } from '../../features/modalsSlice';
import InputField from '../../reusable/InputField';
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import Textarea from '../../reusable/Textarea';
import { FaUpload } from "react-icons/fa";
import toast from 'react-hot-toast';

const BookMentor = () => {
    const dispatch = useDispatch();
    const [fileName, setFileName] = useState('');
    const [inputField, setInputField] = useState({
        fname: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        query: ""
    });


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputField((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { fname, phone, email, date, time, query } = inputField

        if(!fname || !phone || !email || !date || !time || !query){
            return toast.error("Field Cannot Be Blank")
        }

        toast.success("Form Submitted");
        dispatch(setBookMentor({ modal: false }));
    };


    console.log(inputField)

    return (
        <div className='h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75 p-2'>
            <div className="bg-white w-full h-full lg:w-[500px] lg:h-[82vh] radius7 z-60 relative cursor-pointer overflow-y-auto">
                <div className='flex justify-between items-center font20 cursor-pointer mb-1 p-2'>
                    <h1 className='font20 capitalize'>Fill your details & book mentor call</h1>
                    <IoClose onClick={() => dispatch(setBookMentor({ modal: false }))} />
                </div>

                <div className="p-2">
                    {/* Name */}
                    <div className="input_box">
                        <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                            <FaRegUser className='theme-text-red' />
                            <InputField
                                type="text"
                                id="fname"
                                name="fname"
                                required={true}
                                placeholder="Enter Your Full Name"
                                className="text-md w-full outline-none"
                                onChange={handleInput}
                                value={inputField.fname}
                            />
                        </div>
                    </div>

                    {/* Mobile & Email */}
                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3">
                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <IoCallOutline className='theme-text-red' />
                                    <InputField
                                        value={inputField.phone}
                                        onChange={handleInput}
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        required={true}
                                        placeholder="Enter Your Mobile Number"
                                        className="text-md w-full outline-none"
                                    />
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3">
                                    <IoMailOutline className='theme-text-red' />
                                    <InputField
                                        value={inputField.email}
                                        onChange={handleInput}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required={true}
                                        placeholder="Enter Your Email"
                                        className="text-md w-full outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="input_box mt-3">
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-full">
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <InputField
                                        value={inputField.date}
                                        onChange={handleInput}
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="text-md outline-none text-gray-400 w-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                                    <InputField
                                        value={inputField.time}
                                        onChange={handleInput}
                                        type="time"
                                        id="time"
                                        name="time"
                                        className="text-md w-full outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Query */}
                    <div className="input_box mt-3">
                        <div className="flex items-center border border-[#DB251B] py-2 px-2 rounded-sm gap-3 w-full">
                            <Textarea
                                id="query"
                                value={inputField.query}
                                onChange={handleInput}
                                name="query"
                                className="outline-none resize-none text-md w-full"
                                placeholder="Enter Your Query"
                            />
                        </div>
                    </div>

                    {/* File Upload */}
                    <div className="input_box mt-3">
                        <div className="w-full">
                            <label htmlFor="fileUpload" className="flex items-center justify-between gap-2 border border-[#DB251B] py-2 px-3 radius30 w-fit cursor-pointer theme-text-red text-md hover:bg-[#fef1f0] transition-all theme-bg-red">
                                <span className="flex items-center gap-2 text-white">
                                    {fileName ? fileName : "Attach PDF / Image"}
                                </span>
                                <input
                                    type="file"
                                    id="fileUpload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    name="fileUpload"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="bg-[#272425] flex items-center gap-3 justify-between mt-3 px-2 py-2 text-white rounded-bl-[7px] rounded-br-[7px] absolute w-full bottom-0 z-50">
                    <div>
                        <span className='font13'>Total Payable</span>
                        <h1 className='font20'>₹ 200.00</h1>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={handleSubmit} className='uppercase theme-bg-red radius30 py-2 px-4 text-white text-md cursor-pointer'>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookMentor;
