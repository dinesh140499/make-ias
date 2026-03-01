import React, { useEffect } from 'react';
import SectionHeading from '../../common/heading/SectionHeading';
import { FaRegAddressBook } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import useIsMobile from '../../customHook/useIsMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksRequest } from '../../redux/actions/homeActions';
import { IMAGE_BASE_URL } from '../../config/constant';
import LoaderSection from '../../reusable/LoaderSection';
{/* <LoaderSection /> */ }

const Book = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const { books, loader } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getBooksRequest());
  }, [dispatch]);

  return (
    <section className="book mt-10">
      <div className='container95'>
        <SectionHeading Icon={FaRegAddressBook} title="Books" subTitle={"Explore Our Books & Notes"} />
        {loader ? <LoaderSection /> : books.length > 0? <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-9">
          {books.map((book) => (
            <div className='border border-[#DEDEDE] p-2 rounded-lg bg-[#FCFCFC]' key={book._id}>
              <div className="flex gap-3 flex-1">
                <div className="img_box w-[100px]">
                  <img src={`${IMAGE_BASE_URL}${book.image}`} className='h-full w-full' alt={book.bookName} />
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg lg:text-md font-[500] mb-3'>{book.bookName}</h3>
                  <button className='flex items-center justify-between border border-[#DB251B] radius7 w-full px-3'>
                    <div className='font14 flex gap-3 items-center font-medium py-[5px]'>
                      <span>₹ {book.ebookPrice}</span>
                      <span>E-book</span>
                    </div>
                    <span className='font20 cursor-pointer duration-75 hover:text-red-600'><AiOutlineDownload /></span>
                  </button>
                  <button className='flex items-center justify-between border border-[#DB251B] theme-bg-red text-white radius7 w-full px-3 mt-3'>
                    <div className='font14 flex gap-3 items-center font-medium py-[5px]'>
                      <span>₹ {book.hardCopyPrice}</span>
                      <span>Hardcopy</span>
                    </div>
                    <span className='font20 cursor-pointer'><LuBookText /></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>:"No Book Issue"}
      </div>
    </section>
  );
};

export default Book;
