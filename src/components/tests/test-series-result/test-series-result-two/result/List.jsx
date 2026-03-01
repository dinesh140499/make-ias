import React from "react";
import Pagination from "../../../../../reusable/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { CiFilter, CiSearch } from "react-icons/ci";

const List = () => {
    const { result } = useParams();
    const navigate = useNavigate();

    return (
        <div className="mt-10 mb-10">
            <div className="container95">
                <h3 className="font22 uppercase mb-3">
                    {result.replaceAll("-", " ")}
                </h3>

                {/* Search & Filter Section */}
                <div className="radius7 border border-[#F5F5F5]">
                    <div className="flex items-center gap-3 justify-end px-4 py-1">
                        <div className="flex items-center gap-2  p-2 rounded-md">
                            <CiSearch className="font16" />
                            <input
                                type="text"
                                placeholder="Search Subjects..."
                                className="outline-none font14 w-full"
                            />
                        </div>
                        <CiFilter className="font16 cursor-pointer" />
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed border-collapse border border-[#F5F5F5]">
                            <thead className="">
                                <tr>
                                    {["Name", "A", "B", "C", "D", "F", "Rank"].map((col, i) => (
                                        <th
                                            key={i}
                                            className="font14 px-4 py-2  uppercase text-left "
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 7 }).map((_, i) => (
                                    <tr className="even:bg-gray-100 hover:bg-gray-200" key={i}>
                                        {["Ravi Kumar", "58", "118.6", "103", "39", "8", "1"].map((data, j) => (
                                            <td
                                                key={j}
                                                className="uppercase px-4 py-3 text-left font14 "
                                            >
                                                <p className="font-medium">{data}</p>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination Component */}
                {/* <div className="mt-5">
                    <Pagination />
                </div> */}
            </div>
        </div>
    );
};

export default List;
