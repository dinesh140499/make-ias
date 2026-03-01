import React from "react";

const TabComponent = ({ tabs, activeTab = 0, setActiveTab, activeColor = "", inactiveColor = "bg-[#F2F2F2] text-black", customStyle, children }) => {
    return (
        <>
            <div className="w-full">
                <div className="flex flex-wrap ">
                    <div className="flex gap-2 w-full flex-wrap justify-center">
                        {tabs && tabs?.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={` max-w-[100px] w-full py-1  font-[600]
                                    px-1 transition-all duration-300 
                           cursor-pointer relative text-lg  ${customStyle?.button} 
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
                </div>

                {tabs && tabs[activeTab].content}
                {children}
            </div>
        </>
    );
};

export default TabComponent;
