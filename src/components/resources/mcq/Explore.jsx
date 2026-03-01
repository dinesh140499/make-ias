import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown, MdOutlineFilterAlt } from "react-icons/md";
import InputField from "../../../reusable/InputField";

const getYear = (startYear = 2000) => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
        id: i + 1,
        label: (currentYear - i).toString(),
    }));
};

const getMonth = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return months.map((month, index) => ({
        id: index + 1,
        label: month,
    }));
};

const initialTabs = [
    {
        label: "Year",
        options: getYear(),
        selected: "Year",
    },
    {
        label: "Months",
        options: getMonth(),
        selected: "Months",
    },
    {
        label: "Exams",
        options: ["Exam 1", "Exam 2"],
        selected: "Exams",
    },
];

const Explore = () => {
    const [tabs, setTabs] = useState(initialTabs);
    const [activeTab, setActiveTab] = useState("");

    console.log(getMonth())

    // ✅ Handles Selection & Moves Previous Value to Dropdown
    const handleSelect = (tabLabel, option) => {
        setTabs((prevTabs) =>
            prevTabs.map((tab) =>
                tab.label === tabLabel
                    ? {
                        ...tab,
                        selected: typeof option === "object" ? option.label : option, // Ensure correct format
                        options: [
                            ...tab.options.filter((opt) =>
                                typeof opt === "object" ? opt.label !== option.label : opt !== option
                            ),
                            tab.selected, // Move previous value back to dropdown
                        ],
                    }
                    : tab
            )
        );
        setActiveTab(""); // Close dropdown after selection
    };

    return (
        <div className="mt-10 mb-7">
            <div className="container95">
                <div className="lg:flex items-center justify-between">
                    {/* Dropdown Buttons */}
                    <div className="flex flex-wrap items-center gap-3 theme-bg-grey w-fit radius7 relative">
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => setActiveTab(tab.label)}
                                onMouseLeave={() => setActiveTab("")}
                            >
                                {/* Dropdown Button */}
                                <button
                                    className={`flex items-center font15 font-[500] justify-between capitalize duration-75 px-3 py-2 w-[150px] cursor-pointer radius7 ${activeTab === tab.label ? "bg-[#DB251B] text-white" : "text-black"
                                        } hover:bg-[#DB251B] hover:text-white`}
                                >
                                    {tab.selected}
                                    <MdArrowDropDown />
                                </button>

                                {/* Dropdown List */}
                                {activeTab === tab.label && (
                                    <div className="shadow radius7 absolute top-full left-0 bg-white py-2 px-2 w-full max-h-[120px] overflow-y-auto">
                                        {tab.options.map((opt, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSelect(tab.label, opt)}
                                                className="border-b border-gray-300 cursor-pointer font15 capitalize w-full text-left py-1 hover:text-[#DB251B]"
                                            >
                                                {typeof opt === "object" ? opt.label : opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="flex mt-5 items-center gap-3 border border-[#DB251B] radius7 py-2 px-1 w-full lg:w-auto">
                        <IoIosSearch className="font20" />
                        <InputField
                            placeholder={"Search Courses..."}
                            className={"font15 outline-none justify-between"}
                        />
                        <MdOutlineFilterAlt className="font20 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
