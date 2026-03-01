import React from "react";
import useIsMobile from "../customHook/useIsMobile";
import TabComponentMobile from "./mobile/TabComponent";

const TabComponent = ({ tabs, activeTab = 0, setActiveTab, activeColor = "", inactiveColor = "bg-[#F2F2F2] text-black", customStyle, children }) => {
    const isMobile = useIsMobile()
    return (
        <>
            {isMobile ? <TabComponentMobile tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                activeColor={activeColor}
                // inactiveColor={inactiveColor}
                customStyle={customStyle} /> :
                <div className="w-full">
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-3">
                            {tabs && tabs?.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-5 tracking-wide py-2 text-lg font-[600] transition-all duration-300 
                                        
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
                        <button className='capitalize theme-text-red font15 cursor-pointer'>See all test series</button>
                    </div>

                    {tabs && tabs[activeTab].content}
                    {children}
                </div>}
        </>
    );
};

export default TabComponent;
