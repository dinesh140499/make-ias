import React from 'react'
import InputField from '../../reusable/InputField'

const Form = () => {
  return (
    <form className='mb-5'>
      <div className="flex items-center gap-5">
        <div className='w-full'>
          <label htmlFor="fname" className='font16'>
            Full Name
          </label>
          <InputField id={"fname"} type={"text"} placeholder={"Please Enter Your Full Name"} name={"fname"} className={"w-full border border-[#EDF2F6] rounded-md py-2 px-2 mt-2 font16 bg-[#EDF2F6] outline-none"} required={true} />
        </div>
        <div className='w-full'>
          <label htmlFor="email" className='font16'>
            Email
          </label>
          <InputField id={"email"} type={"email"} placeholder={"Please Enter Your Email"} name={"email"} className={"w-full border border-[#EDF2F6] rounded-md py-2 px-2 mt-2 font16 bg-[#EDF2F6] outline-none"} required={true} />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div className='w-full'>
          <label htmlFor="username" className='font16'>
            Username
          </label>
          <InputField id={"username"} type={"text"} placeholder={"Please Enter Your Username"} name={"username"} className={"w-full border border-[#EDF2F6] rounded-md py-2 px-2 mt-2 font16 bg-[#EDF2F6] outline-none"} required={true} />
        </div>
        <div className='w-full'>
          <label htmlFor="phone" className='font16'>
            Phone Number
          </label>
          <div className="flex items-center gap-1 rounded-md bg-[#EDF2F6] py-2 px-2 mt-2">
            {/* <InputField type={"number"} className={"flex-1/8 appearance-none w-full border border-[#EDF2F6]    font16  outline-none"} /> */}
            <select name="" id="" className='outline-none'>
              <option value="+91">+91</option>
            </select>
            <InputField id={"number"} type={"number"} placeholder={"Please Enter Your Phone Number"} name={"phone"} className={"w-full border border-[#EDF2F6]  font16  outline-none"} required={true} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-full">
          <button type='submit' className='rounded-md py-2 px-5 bg-[#DB251B] text-white mt-7 cursor-pointer'>Update Profile</button>
          <button type='reset' className='rounded-md py-2 px-5 mt-7 cursor-pointer'>Reset</button>
        </div>
      </div>
    </form>
  )
}

export default Form