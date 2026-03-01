import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionHeading from "../../common/heading/SectionHeading";
import { FaRegAddressBook } from "react-icons/fa";
import { fetchCentersRequest } from "../../redux/actions/homeActions";
import { IMAGE_BASE_URL } from "../../config/constant";


const Centers = () => {
  const dispatch = useDispatch();

  const { centers, loading } = useSelector((state) => state.home);


  useEffect(() => {
    dispatch(fetchCentersRequest());
  }, [dispatch]);

  return (
    <div className="center mt-10 mb-10 lg:mt-25 lg:mb-25">
      <div className="container95">
        <SectionHeading
          Icon={FaRegAddressBook}
          title="Center"
          subTitle="Our Learning Center"
        />
        {loading ? (
          <p className="text-center mt-5">Loading centers...</p>
        ) : (
          <div className="grid lg:grid-cols-2 lg:flex gap-3 mt-5 justify-center">
            {centers?.map((center) => (
              <div key={center._id} className="flex flex-1/2 flex-col justify-center item-center p-3 lg:w-1/3 lg:justify-center">
                <div className="flex justify-center">
                  <img
                    src={`${IMAGE_BASE_URL}${center.image}`}
                    alt={center.city}
                    className="object-contain max-h-[150px]"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-center text-lg mt-3 break-words">
                    {center.city}
                  </h4>
                </div>
                <div>
                  <p className="theme-para-grey text-center font14 mx-2 mt-1">
                    {center.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Centers;
