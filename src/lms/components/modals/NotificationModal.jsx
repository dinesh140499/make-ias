import React from 'react'
import img1 from '../../assets/images/notification/1.png'
import img2 from '../../assets/images/notification/2.png'


const NotificationModal = () => {
    return (
        <>
            <div className='rounded-md p-1 shadow-md bg-white absolute top-23 right-15 z-10 w-[500px] h-[300px] overflow-y-auto notification'>
                {Array.from({ length: 5 }).map((_, i) =>
                    <div className="flex gap-3 py-5 border-b-[2px] border-[#F1F4F9] hover:bg-green-50 rounded-md rounded-b-none cursor-pointer">
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
                        <p className='font15'>Hey Peter, we’ve got a new user research opportunity for you. Adam from The Mayor’s Office is looking for people like you.</p>
                        <p className='font13 theme-para-grey'>5 days ago</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotificationModal