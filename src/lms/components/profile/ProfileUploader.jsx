import React, { useState } from 'react'
import { RiImageAddLine } from "react-icons/ri";
import InputField from '../../reusable/InputField';

const ProfileUploader = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div>
            <p>Your Profile Picture</p>

            <label htmlFor="file-upload" className="mt-3 rounded-xl border border-dotted h-[150px] w-[150px] flex flex-col justify-center items-center bg-[#EDF2F6] cursor-pointer">
                <RiImageAddLine className='text-[#4C535F] text-[40px]' />
                <h1 className='capitalize font16 text-center mt-3'>Upload your <br /> photo</h1>
            </label>

            <InputField
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
            />

            {fileName && (
                <p className="mt-3 text-sm text-[#4C535F]">
                    Selected file: <strong>{fileName}</strong>
                </p>
            )}
        </div>
    )
}

export default ProfileUploader;
