import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const initialTabs = [
    { label: "Monthly" },
    { label: "Three Months" },
    { label: "Quarterly" },
    { label: "Yearly" },
];

const ChoosePlan = () => {
    const [activeTab, setActiveTab] = useState("Monthly");

    return (
        <div className="mt-10 mb-7">
            <div className="container95">
                <div className="text-center mb-10">
                    <h1 className="font22 capitalize">Choose Subscription Plans</h1>
                    <p className="theme-para-grey font14">Let’s get you all st up so you can access your personal account.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex justify-center items-center gap-3 theme-bg-grey w-fit radius7 relative">
                        {initialTabs.map((tab, i) => (
                            <button
                                key={i}
                                className={`flex items-center font15 font-[500] justify-center capitalize duration-200 px-3 py-2 w-[150px] cursor-pointer text-center radius7 
                  ${activeTab === tab.label ? "bg-[#DB251B] text-white" : "text-black"}
                  hover:bg-[#DB251B] hover:text-white`
                                }
                                onClick={() => setActiveTab(tab.label)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Section with Full Hover Effect */}
                <div className="lg:flex mt-10  lg:max-w-[90%] mx-auto">
                    <div className={`bg-[#fbfbfb] w-full radius7 grid lg:grid-cols-3 ${activeTab === 'Monthly' ? '' : 'hidden'} `}>
                        <div className={`overflow-hidden py-10 px-10 radius7 transition group duration-200 cursor-pointer flex flex-col justify-between  group hover:scale-105 hover:bg-[#DB251B]  hover:!text-white `}>
                            <div>
                                <p className="font22">$19 <span className="font15">/month</span></p>
                                <p className="font-22 mt-3 ">Starter</p>
                                <p className="font14 capitalize">Unleash the power of automation</p>

                                {["Multi-Step Zaps", "3 Premium", "2 Users Team"].map((feature, index) => (
                                    <p key={index} className="flex items-center gap-2 mt-2  font14">
                                        <FaCheck className="h-[16px] w-[16px]  rounded-full group-hover:bg-white group-hover:text-black bg-black text-white p-[1px] capitalize " />
                                        <span>{feature}</span>
                                    </p>
                                ))}
                            </div>

                            <button className="w-full rounded-full py-3 theme-bg-red text-white mt-10 cursor-pointer group-hover:!bg-white group-hover:!text-black ">
                                Choose Plan
                            </button>
                        </div>
                        <div className="py-10 px-10 radius7 transition group duration-200 cursor-pointer flex flex-col justify-between  group hover:scale-105 hover:bg-[#DB251B] hover:!text-white">
                            <div>
                                <p className="font22">$54 <span className="font15">/month</span></p>
                                <p className="font22 mt-3 ">Professional</p>
                                <p className="font14 capitalize">Advanced tools to take your work to the next level.</p>

                                {["Multi-Step Zaps", "3 Premium", "50 Users team", "Shared Workspace"].map((feature, index) => (
                                    <p key={index} className="flex items-center gap-2 mt-2  font14">
                                        <FaCheck className="h-[16px] w-[16px]  rounded-full group-hover:bg-white group-hover:text-black bg-black text-white p-[1px] capitalize " />
                                        <span>{feature}</span>
                                    </p>
                                ))}
                            </div>

                            <button className="w-full rounded-full py-3 theme-bg-red text-white mt-10 cursor-pointer group-hover:!bg-white group-hover:!text-black ">
                                Choose Plan
                            </button>
                        </div>
                        <div className="py-10 px-10 radius7 transition group duration-75 cursor-pointer flex flex-col justify-between  group hover:scale-100 hover:bg-[#DB251B] hover:!text-white">
                            <div>
                                <p className={"uppercase bg-[#DB251B] duration-100 w-fit font13  ms-auto mb-3 text-white radius7 p-[3px] group-hover:bg-[white] font-bold group-hover:text-black hidden group-hover:block"}>Most Populor</p>
                                <p className="font22">$89 <span className="font15">/month</span></p>
                                <p className="font22 mt-3 ">Company</p>
                                <p className="font14 capitalize">Automation plus enterprise-grade features.</p>

                                {["Multi-step Zap", "Unlimited Premium Apps", "Unlimited Users Team", "Advanced Admin", "Custom Data Retention"].map((feature, index) => (
                                    <p key={index} className="flex items-center gap-2 mt-2  font14">
                                        <FaCheck className="h-[16px] w-[16px]  rounded-full group-hover:bg-white group-hover:text-black bg-black text-white p-[1px] capitalize " />
                                        <span>{feature}</span>
                                    </p>
                                ))}
                            </div>

                            <button className="w-full rounded-full py-3 theme-bg-red text-white mt-10 cursor-pointer group-hover:!bg-white group-hover:!text-black ">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>

                <p className="theme-para-grey text-center my-10">OR</p>

                <Link to={'/'} className="border-[2px] border-[#DB251B] flex justify-center w-[200px] mx-auto font14 rounded-full py-2    duration-75 hover:bg-[#DB251B] hover:text-white"><p>Continue With Free Access</p></Link>

            </div>
        </div>
    );
};

export default ChoosePlan;
