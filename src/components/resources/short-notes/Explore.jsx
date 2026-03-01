import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown, MdOutlineFilterAlt } from "react-icons/md";
import InputField from "../../../reusable/InputField";

const initialTabs = [
    {
        label: "Subjects",
        options: ["Philosophy", "English", "Hindi"],
        selected: "Subjects",
    },
    {
        label: "Medium",
        options: ["Hindi", "English"],
        selected: "Medium",
    },
    {
        label: "Topic",
        options: ["Topic 1", "Topic 2"],
        selected: "Topic",
    },

];

const Explore = () => {
    const [tabs, setTabs] = useState(initialTabs);
    const [activeTab, setActiveTab] = useState("");

    const handleSelect = (tabLabel, optionLabel) => {
        console.log(tabLabel, optionLabel)
        setTabs((prevTabs) =>
            prevTabs.map((tab) =>
                tab.label === tabLabel
                    ? {
                        ...tab,
                        selected: optionLabel,
                        options: [...tab.options.filter((opt) => opt !== optionLabel), tab.selected],
                    }
                    : tab
            )
        );
        setActiveTab("");
    };

    return (
        <div className="mt-10 mb-7">
            <div className="container95">
                <div className="lg:flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-3 theme-bg-grey w-fit radius7 relative">
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => setActiveTab(tab.label)}
                                onMouseLeave={() => setActiveTab("")}
                            >
                                <button
                                    className={`flex items-center font15 font-[500] justify-between capitalize duration-75 px-5 lg:px-3 py-2  lg:w-[150px] cursor-pointer radius7 ${activeTab === tab.label ? "bg-[#DB251B] text-white" : "text-black"
                                        } hover:bg-[#DB251B] hover:text-white`}
                                >
                                    {tab.selected}
                                    <MdArrowDropDown />
                                </button>

                                {activeTab === tab.label && (
                                    <div className="shadow radius7 absolute top-full left-0 bg-white py-2 px-2 w-full max-h-[120px] overflow-y-auto">
                                        {tab.options.map((opt, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleSelect(tab.label, opt)}
                                                className="border-b border-gray-300 cursor-pointer font15 capitalize w-full text-left py-1 hover:text-[#DB251B]"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between gap-3 border border-[#DB251B] radius7 py-2 px-1 w-full lg:w-auto mt-3">
                        <div className="flex justify-between gap-3">
                            <IoIosSearch className='font20' />
                            <InputField placeholder={"Search Courses..."} className={"font15 outline-none justify-between"} />
                        </div>
                        <MdOutlineFilterAlt className='font20 cursor-pointer'
                        // onClick={() => dispatch(setFilter({modal:true,data:[
                        //     {
                        //         label:"Datewise"
                        //     },
                        //     {
                        //         label:"Timewise"
                        //     },
                        // ]}))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
