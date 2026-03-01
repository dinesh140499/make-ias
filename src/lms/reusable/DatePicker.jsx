import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = ({ selectedDate, onDateChange }) => {
    const [toggleCalender, setToggleCalender] = useState(false);

    // ✅ Format date as "DD-MM-YYYY"
    const formatDate = (date) => {
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    // ✅ Toggle calendar visibility
    const handleCalender = () => {
        setToggleCalender((prev) => !prev);
    };

    // ✅ Handle date selection and close the calendar
    const handleDateChange = (date) => {
        onDateChange(date);
        setToggleCalender(false); // Hide calendar after selecting a date
    };

    return (
        <div className="relative w-[25%] border border-[#DB251B] p-3 radius7 mb-5">
            <div className="flex items-center justify-between">
                <p className="theme-para-grey font14">{formatDate(selectedDate)}</p>
                <SlCalender
                    className="text-[#DB251B] cursor-pointer"
                    onClick={handleCalender}
                />
            </div>
            {toggleCalender && (
                <div className="absolute top-[40px] left-0 bg-white shadow-lg p-2 z-10">
                    <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
            )}
        </div>
    );
};

export default DatePicker;
