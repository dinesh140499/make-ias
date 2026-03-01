import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/builder-logo.png';
import { popupBtn, navLink } from '../NavLink';
import { useDispatch } from 'react-redux';
import { setBookMentor } from '../../../features/modalsSlice';
import { MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";

// Dropdowns
import { FaRegUserCircle } from 'react-icons/fa';
import { logoutRequest } from '../../../redux/actions/authActions';

// const dropdownsMenu = [
//   {
//     id: 1,
//     name: "Courses",
//     element: [
//       { name: "Courses", link: "/courses" },
//       { name: "Course 1", link: "/courses/1" },
//       { name: "Course 2", link: "/courses/2" },
//     ]
//   },
//   {
//     id: 2,
//     name: "Tests",
//     element: [
//       { name: "Test", link: "/tests" },
//       { name: "Test 1", link: "/tests/1" },
//       { name: "Test 2", link: "/tests/2" },
//     ]
//   },
//   {
//     id: 3,
//     name: "Resources",
//     element: [
//       {
//         id: 1,
//         name: "Current Affairs Monthly Basis",
//         new: true,
//         link: "/current-affair-monthly-base"
//       },
//       { id: 2, name: "Previous Question Paper", link: "/previous-year-question-paper" },
//       { id: 3, name: "Previous Answer Copy", link: "/" },
//       { id: 4, name: "Toppers Answer Copy", link: "/toppers-answer-copies" },
//       { id: 5, name: "Short Notes", link: "/short-notes" },
//       { id: 6, name: "MCQ Based Monthly Current Affairs", link: "/mcqs" },
//     ]
//   }
// ];

const BottomNavbar = ({ dropdownsMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const token = localStorage.getItem('login');

  const handleColorBtn = (btnAction) => {
    if (btnAction.action === "book-a-mentor-call") {
      dispatch(setBookMentor({ modal: true }));
    }
    if (btnAction.isPage) {
      navigate(btnAction.action);
      setToggleMenu(false);
      setActiveDropdown(null);
    }
  };

  const handleDropdown = (type) => {
    if (activeDropdown === type) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(type);
    }
  };

  return (
    <div className={`z-30 overflow-x-hidden duration-75 ease-linear ${toggleMenu ? 'h-lvh w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px]' : ''}`}>
      <nav className='px-3 py-3 bg-white'>
        <div className="flex justify-between items-center relative z-40">
          <div className='cursor-pointer'>
            <img
              src={logo}
              className='max-w-[160px] w-full'
              alt="logo"
              onClick={() => {
                navigate('/');
                setToggleMenu(false);
              }}
              title='Redirect To Homepage'
            />
          </div>
          <div className="flex items-center gap-3">
            {token && (
              <div className='flex items-center gap-3'>
                <FaRegUserCircle className='text-[#C31B12] text-2xl cursor-pointer' onClick={() => { navigate('/lms'); setToggleMenu(false); }} />
                <IoIosLogOut className='text-2xl cursor-pointer' onClick={() => dispatch(logoutRequest())} />
              </div>
            )}
            {!token && (
              <FaRegUserCircle className='text-[#C31B12] text-2xl cursor-pointer' onClick={() => { navigate('/lms'); setToggleMenu(false); }} />
            )}
            <GiHamburgerMenu className='text-3xl text-[#C31B12] cursor-pointer' onClick={() => {
              setToggleMenu(prev => !prev);
              setActiveDropdown(null);
            }} />
          </div>
        </div>

        {!toggleMenu && (
          <div className="grid grid-cols-2 gap-2 pt-3">
            {popupBtn.map(item => (
              <button
                key={item.id}
                onClick={() => handleColorBtn({ isPage: item.page, action: item.action })}
                className={`flex items-center justify-center gap-1 radius30 text-white py-2 px-1 text-[12px] cursor-pointer ${item.btnColor}`}
              >
                <item.icon />
                <span className='font-[500]'>{item.btnText}</span>
              </button>
            ))}
          </div>
        )}

        <div className={`pl-5 mt-4 absolute right-0 top-18 transition-transform duration-300 ease-in-out bg-[#C31B12] text-white flex-col pt-5 w-1/2 h-full z-50 ${toggleMenu ? 'translate-x-0' : 'translate-x-full hidden'}`}>
          {navLink.map((navItem, i) => {
            const matchedDropdown = dropdownsMenu?.find(menu => menu.name === navItem.category);
            const menuItems = matchedDropdown?.mobileElement;

            return (
              <div key={i} className='font-[500] relative py-2'>
                {navItem.items ? (
                  <>
                    <div
                      className='flex items-center gap-1 cursor-pointer duration-75 mb-1'
                      onClick={() => handleDropdown(navItem.category)}
                    >
                      <p className='text-lg capitalize'>{navItem.category}</p>
                      <MdArrowDropDown /> 
                    </div>
                    {activeDropdown === navItem.category && menuItems?.map((item, j) => (
                      <div key={j} className='bg-white text-black p-1' onClick={() => setToggleMenu(false)}>
                        <Link to={item.link} className='text-md'>{item.name}</Link>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className='flex items-center gap-1 cursor-pointer relative duration-75' onClick={() => setToggleMenu(false)}>
                    <Link to={navItem.link} className="text-lg capitalize">{navItem.category}</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};


export default BottomNavbar;
