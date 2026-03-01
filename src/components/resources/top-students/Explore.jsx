import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const initialTabs = [
    {
        label: "Exams",
        options: ["UPSC", "UPPCS", "BPCS"],
        selected: "Exams",
    },
    {
        label: "Medium",
        options: ["Medium 1", "Medium 2"],
        selected: "Medium",
    },
    {
        label: "Year",
        options: ["Year 1", "Year 2"],
        selected: "Year",
    },
    {
        label: "Subjects",
        options: ["Subjects 1", "Subjects 2"],
        selected: "Subjects",
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
                <div className="flex items-center justify-center">
                    <div className="flex flex-wrap items-center gap-3 theme-bg-grey w-fit radius7 relative">
                        {tabs.map((tab, i) => (
                            <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => setActiveTab(tab.label)}
                                onMouseLeave={() => setActiveTab("")}
                            >
                                <button
                                    className={`flex items-center font15 font-[500] justify-between capitalize duration-75 px-3 py-2 w-[150px] cursor-pointer radius7 ${activeTab === tab.label ? "bg-[#DB251B] text-white" : "text-black"
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
                </div>
            </div>
        </div>
    );
};

export default Explore;
