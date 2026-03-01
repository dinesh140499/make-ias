import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Prelims = () => {
  const [dropdownToggle, setDropdownToggle] = useState({ index: null, type: null });
  const [selectedCount, setSelectedCount] = useState(0);
  const dropdownRef = useRef(null);

  const handleDropdownChange = () => {
    setSelectedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setTimeout(() => {
          setDropdownToggle({ index: null, type: null });
          setSelectedCount(0);
        }, 100);
      }
      return newCount;
    });
  };

  const openDropdown = (index, type) => {
    const isSame = dropdownToggle.index === index && dropdownToggle.type === type;
    setDropdownToggle(isSame ? { index: null, type: null } : { index, type });
    setSelectedCount(0);
  };

  const branches = ["Branch 1", "Branch 2"];
  const dates = ["Date 1", "Date 2"];
  const times = ["Time 1", "Time 2"];
  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownToggle({ index: null, type: null });
        setSelectedCount(0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 duration-75 mt-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative rounded-lg border border-[#DEDEDE]">
            <div className="text-center p-3">
              <p className="uppercase">TEST - 1 (CODE-2051)</p>
              <h1 className="uppercase font22">POLITY / HINDI</h1>
              <p className="italic theme-para-grey">Date: 19.02.2026</p>
              <div className="flex items-center justify-between my-1 text-[#000000]">
                <p className="font14">150 Question</p>
                <p className="font14">200 Marks</p>
                <p className="font14">2 hours</p>
              </div>
              <div className="text-left space-y-1">
                <Link to="/" className="font13 border-b inline-block text-black">
                  Download Question Paper
                </Link>
                <br />
                <Link to="/" className="font13 border-b inline-block text-black">
                  Download Solution
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between mt-1 relative">
              {/* Attempt Online */}
              <div className="relative w-full">
                <button
                  className="font14 bg-[#D9D9D9] w-full py-3 rounded-bl-lg cursor-pointer hover:bg-[#DB251B] hover:text-white"
                  onClick={() => openDropdown(i, "online")}
                >
                  Attempt Online
                </button>

                {dropdownToggle.index === i && dropdownToggle.type === "online" && (
                  <div
                    className="absolute top-full left-0 mt-1 flex flex-col gap-2 bg-white p-1 border rounded z-10 shadow-md w-full"
                    ref={dropdownRef}
                  >
                    {[branches, dates, times].map((list, idx) => (
                      <select
                        key={idx}
                        className="font13 cursor-pointer border px-2 py-1 rounded"
                        onChange={handleDropdownChange}
                      >
                        
                        {list.map((item, j) => (
                          <option key={j} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    ))}
                  </div>
                )}
              </div>

              {/* Attempt Offline */}
              <div className="relative w-full">
                <button
                  className="font14 bg-[#D9D9D9] w-full py-3 rounded-br-lg cursor-pointer hover:bg-[#DB251B] hover:text-white"
                  onClick={() => openDropdown(i, "offline")}
                >
                  Attempt Offline
                </button>

                {dropdownToggle.index === i && dropdownToggle.type === "offline" && (
                  <div
                    className="absolute top-full left-0 mt-1 flex flex-col gap-2 bg-white p-1 border rounded z-10 shadow-md w-full"
                    ref={dropdownRef}
                  >
                    {[branches, dates, times].map((list, idx) => (
                      <select
                        key={idx}
                        className="font13 cursor-pointer border px-2 py-1 rounded"
                        onChange={handleDropdownChange}
                      >
                        
                        {list.map((item, j) => (
                          <option key={j} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prelims;
