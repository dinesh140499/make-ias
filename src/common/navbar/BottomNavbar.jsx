import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/builder-logo.png';
import { popupBtn, socialIcon, navLink } from './NavLink';
import { useDispatch, useSelector } from 'react-redux';
import { setBookMentor } from '../../features/modalsSlice';
import { MdArrowDropDown } from "react-icons/md";
import Loader from '../../reusable/Loader'


// Dropdowns
import Courses from './dropdown/Courses';
import Tests from './dropdown/Tests';
import Resources from './dropdown/Resources';
import { logoutRequest } from '../../redux/actions/authActions';
import { FaRegUserCircle } from 'react-icons/fa';


const BottomNavbar = ({ dropdownsMenu }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPage = location.pathname.split("/")[1]
  const dispatch = useDispatch()
  const [menuHover, setMenuHover] = useState("")
  const token = JSON.parse(localStorage.getItem('login'))
  const { data } = useSelector((state) => state.auth || {});


  const handleColorBtn = (btnAction) => {
    const page = btnAction
    if (btnAction.action === "book-a-mentor-call") {
      dispatch(setBookMentor({ modal: true }))
    }

    if (page.isPage) {
      navigate(btnAction?.action)
    }
  }

  return (
    <nav className='flex items-center justify-between px-5 pt-5'>
      <div className='flex-1 cursor-pointer'>
        <img src={logo} alt="logo" onClick={() => navigate('/')} title='Redirect To Homepage' />
      </div>
      <div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            {popupBtn.map(item => (
              <button
                key={item.id}
                onClick={() => handleColorBtn({ isPage: item.page, action: item.action })}
                className={`flex items-center gap-2 radius30 text-white py-2 px-3 font13 cursor-pointer ${item.btnColor}`}
              >
                {<item.icon />}
                <span className='font-[500]'>{item.btnText}</span>
              </button>
            ))}
          </div>


          <div className="flex items-center gap-3">
            {socialIcon.map(item => (
              <Link key={item.id} to={item.link}>
                <img src={item.icon} title={item.name} alt={item.name} />
              </Link>
            ))}
          </div>


        </div>
        {/* Page Links */}
        <div className="flex items-center justify-between mt-4 relative">
          {navLink.map((navItem, i) => {
            return (
              <React.Fragment
              key={i}
              >
                <div  className='font-[500] relative'>
                  {navItem.items ? (
                    <>
                      <div className={`flex pb-4 items-center gap-1 cursor-pointer  duration-75 border-b-[2px] ${"/" + currentPage === `${navItem.link}` ? 'border-b-[#db251b]' : 'border-b-[white]'}  hover:border-b-[#db251b]`} onMouseEnter={() => setMenuHover({ category: navItem.category, items: navItem.items })} onClick={() => navigate(navItem?.link)}>
                        <p className='font15 capitalize relative'>
                          {navItem.category}
                        </p>
                        <MdArrowDropDown />
                      </div>
                    </>
                  ) : (
                    <div
                      className={`flex pb-4 items-center gap-1 cursor-pointer relative duration-75 border-b-[2px] ${`/${currentPage}` === navItem.link ? "border-b-[#db251b]" : "border-b-[white]"
                        }  hover:border-b-[#db251b]`}
                      onMouseEnter={() => setMenuHover({ category: navItem.category, items: navItem.items })}
                      onClick={() => navItem.link && navigate(navItem.link)}
                    >
                      <p className="font15 capitalize">{navItem.category}</p>
                    </div>
                  )}
                </div>
              </React.Fragment>)
          })}
          {token ? <button
            onClick={() => navigate('/lms')}
            className={`mb-3 rounded-full capitalize px-3 py-2 gap-1 cursor-pointer duration-75 border-[1px] border-white  hover:text-[#DB251B] ${token ? 'bg-[#DB251B] border-[#DB251B] border-[1px] hover:text-[#DB251B] text-white hover:bg-white hover:border-[#DB251B]' : 'bg-[#fffbd6]'} text-black flex items-center`}
          >
            <FaRegUserCircle className='text-[20px] mr-1 capitalize' />
            Hello {token && token?.name}
          </button> :
            <Link to={'/login'} className={`mb-3 rounded-full  px-3 py-2 gap-1 cursor-pointer  duration-75 border-b-[2px] border-white hover:border-b-[2px] bg-[#fffbd6] hover:text-[#DB251B]`}>
              <p className='font15 capitalize relative' >
                Login/Register
              </p>
            </Link>}
          {menuHover &&
            dropdownsMenu.map((dropdown, i) => {
              if (menuHover?.category?.toLowerCase() === dropdown.name.toLowerCase()) {
                return <div key={i} onMouseLeave={() => setMenuHover("")}>{dropdown.element}</div>;
              }
              return null;
            })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;



