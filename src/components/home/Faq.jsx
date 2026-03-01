import React, { useEffect, useState } from "react";
import SectionHeading from "../../common/heading/SectionHeading";
import { FaRegAddressBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { requestFaq } from "../../redux/actions/homeActions";
import LoaderSection from "../../reusable/LoaderSection";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();
  const { faq, loading } = useSelector((state) => state.home);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    dispatch(requestFaq());
  }, [dispatch]);

  return (
    <div className="faq theme-bg-lightred mt-10 lg:mt-25 py-10">
      <div className="container95">
        <SectionHeading
          Icon={FaRegAddressBook}
          title="FAQ"
          subTitle="Frequently Asked Questions"
        />

        <div className="mt-6 space-y-4">
          {loading ? (
            <LoaderSection />
          ) : faq?.faqs?.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {faq.faqs.map((item, index) => (
                <div
                  key={index}
                  className={` rounded-lg p-1  cursor-pointer  ${openIndex === index ? "h-full border-2 border-red-300" : ""
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={`flex items-center ${openIndex === index ? "" : "border-2 border-red-300"
                    } justify-between theme-bg-white rounded-lg p-4`}>
                    <h3 className="font-medium">{item.question}</h3>
                    <span className="font22 theme-para-gray">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className={`mt-2 theme-para-gray theme-bg-white rounded-lg p-4 ${openIndex === index ? "" : "border-2 border-red-300"
                    }`}>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No FAQs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
