import React, { useState } from "react";
import logo from "../../assets/images/logo/builder-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Profile from "../../components/dashboard/Profile";

const navLinks = [
  {
    id: 1,
    title: "Courses",
    link: "/",
  },
  {
    id: 2,
    title: "Blog",
    link: "/",
  },
  {
    id: 3,
    title: "Gallery",
    link: "/",
  },
  {
    id: 4,
    title: "Contact",
    link: "/",
  },
];

const Topbar = () => {
  const [notification, setNotification] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 left-0 py-2 w-full z-50 bg-white">
        <div className="container95">
          <div className="lg:hidden">
          <Profile />
          </div>
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <ul className="flex items-center mr-4">
              {navLinks.map((nL) => (
                <li key={nL.id}>
                  <Link
                    to={nL.link}
                    className="capitalize font15 font-medium ms-7"
                  >
                    {nL.title}
                  </Link>
                </li>
              ))}
              <li className="hidden lg:block">
                <button
                  onClick={() => navigate("/notifications")}
                  className="font22 flex justify-center items-center ms-5 cursor-pointer mr-1"
                >
                  {notification ? (
                    <div className="relative">
                      <MdOutlineNotificationsActive />
                      <span className="absolute top-[-4px] right-[-2px] bg-[#F45B5B] rounded-full text-[8px] text-white h-[12px] w-[12px] flex justify-center items-center">
                        {notification >= 9 ? "9+" : notification}
                      </span>
                    </div>
                  ) : (
                    <IoIosNotificationsOutline />
                  )}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* {notificationModal &&
        <NotificationModal />
      } */}
    </>
  );
};

export default Topbar;
