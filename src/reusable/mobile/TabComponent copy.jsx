import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const TabComponent = ({ tabs, activeTab = 0, setActiveTab, activeColor = "", inactiveColor = "bg-[#F2F2F2] text-black", onClose, customStyle, children, handleFilter }) => {



    return (
        <>
            <div className='w-full h-full mx-auto  fixed top-0 left-0 flex items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] z-50 duration-75'>
                <div className="flex flex-col justify-center  items-center bg-white w-[90%] mx-auto rounded-md pb-5">
                    <div className="text-right w-full flex justify-end pe-3 py-1 pt-3" onClick={onClose}>
                        <IoIosCloseCircle className="text-[30px] text-right " />
                    </div>
                    {tabs && tabs?.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilter(index)}
                            className={`px-5 font16 tracking-wide py-3 max-w-[200px] w-full text-lg font-[600] transition-all duration-300 
                   cursor-pointer relative ${customStyle?.button} 
  ${activeTab === index ? `${activeColor}` : `${inactiveColor}`}
  `}
                        >
                            {tab?.icon && <span className="mr-2">{tab.icon}</span>}
                            {tab?.title}
                            {activeTab === index && (
                                <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-${activeColor} transition-all duration-300`}></span>
                            )}
                        </button>
                    ))}
                </div>

                {tabs && tabs[activeTab].content}
                {children}
            </div>
        </>
    );
};

export default TabComponent;
