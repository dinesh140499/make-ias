import React, { useState } from 'react'
import ToggleBtn from '../../reusable/ToggleBtn'

const Notifications = () => {
    const [toggle, setToggle] = useState([
        { title: 'General Notification', name: 'general_notification', value: false },
        { title: 'Sound', name: 'sound', value: false },
        { title: 'Vibrate', name: 'vibrate', value: false },
        { title: "Don't Disturb Mode", name: 'ddm', value: false },
        { title: 'Reminders', name: 'reminders', value: false }
    ]);

    const handleToggle = (e) => {
        const { name, checked } = e.target;
        setToggle((prev) =>
            prev.map((item) =>
                item.name === name ? { ...item, value: checked } : item
            )
        );
    };


    return (
        <>
            {toggle.map((item, i) => (
                <div
                    key={i}
                    className='flex capitalize items-center justify-between max-w-[40%] w-full mt-7'
                >
                    <h1>{item.title}</h1>
                    <ToggleBtn
                        name={item.name}
                        checked={item.value}
                        onChange={handleToggle}
                    />
                </div>
            ))}
        </>
    )
}

export default Notifications