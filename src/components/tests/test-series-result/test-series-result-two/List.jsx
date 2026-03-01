import React from "react";
import Pagination from "../../../../reusable/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";

const List = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // console.log(id)
  return (
    <div className="mt-10 mb-10">
      <div className="container95">
        <h3 className="font22 uppercase mb-10">{id.replaceAll('-', " ")}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 ">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="duration-75 radius7 shadow-md bg-[#DB251B] text-white border border-red-800 cursor-pointer transition hover:bg-[#272425] hover:border-[#272425]"
              onClick={() => navigate(`/tests/test-series-result/${id}/${slugify(`Test-0${i + 1}`, {
                trim: true,
                strict: false,
                lower: true,
              })}`)}
            >
              <div className="p-3 ">
                <p className="py-2 flex items-center gap-3 font20 justify-center uppercase">
                  Test-0{i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-20">
        <Pagination />
        </div> */}
      </div>
    </div>
  );
};

export default List;
