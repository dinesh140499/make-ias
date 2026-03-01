import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";

const TOTAL_PAGES = 10; // Define total pages

const Pagination = () => {
    const [activePage, setActivePage] = useState(1);

    const goToPage = (page) => {
        if (page >= 1 && page <= TOTAL_PAGES) {
            setActivePage(page);
        }
    };

    return (
        <div className="flex items-center justify-between gap-3">
            <button
                onClick={() => goToPage(activePage - 1)}
                disabled={activePage === 1}
                className={`cursor-pointer p-2 text-2xl lg:text-lg radius7 bg-[#DB251B] text-white ${activePage === 1 ? 'text-gray-400' : 'text-black hover:bg-gray-200'}`}
            >
                <IoIosArrowBack />
            </button>

            <div className="hidden lg:flex items-center gap-2">
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={`radius7 h-[30px] w-[30px] text-sm font-medium border border-[#DB251B] cursor-pointer duration-75 
              ${activePage === i + 1 ? "bg-[#DB251B] text-white" : "bg-white text-black hover:bg-[#DB251B] hover:text-white"}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => goToPage(activePage + 1)}
                disabled={activePage === TOTAL_PAGES}
                className={`cursor-pointer p-2 text-2xl lg:text-lg radius7 bg-[#DB251B] text-white ${activePage === TOTAL_PAGES ? 'text-gray-400' : 'text-black hover:bg-gray-200'}`}
            >
                <IoChevronForward />
            </button>
        </div>
    );
};

export default Pagination;
