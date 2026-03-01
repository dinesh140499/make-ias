import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='hidden lg:block lg:w-72 mt-10'>
            <Calendar onChange={onChange} value={value} className={"font15 rounded-sm p-0"}/>
        </div>
    )
}

export default Calender