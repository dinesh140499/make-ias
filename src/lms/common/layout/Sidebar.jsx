import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../../redux/actions/authActions";
import toast from "react-hot-toast";
import { RxDashboard } from "react-icons/rx";
import {
  MdSubject,
  MdOutlineSubscriptions,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { GiProgression, GiHamburgerMenu } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { CiBookmark, CiLogout } from "react-icons/ci";
import { GoCrossReference, GoLock } from "react-icons/go";
import { AiOutlineProfile } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const sidebarLinks = [
  { id: 1, title: "Dashboard", icon: <RxDashboard />, link: "" },
  { id: 2, title: "Courses", icon: <MdSubject />, link: "courses" },
  {
    id: 3,
    title: "Track Progress",
    icon: <GiProgression />,
    link: "track-progress",
  },
  {
    id: 4,
    title: "Digital Current Affairs",
    icon: <IoNewspaperOutline />,
    link: "digital-current-affairs",
  },
  {
    id: 5,
    title: "Purchase History",
    icon: <BiPurchaseTag />,
    link: "purchase-history",
  },
  {
    id: 6,
    title: "Subscription",
    icon: <MdOutlineSubscriptions />,
    link: "subscription",
  },
  {
    id: 7,
    title: "Books & Publications",
    icon: <CiBookmark />,
    link: "books-and-publications",
  },
  { id: 8, title: "Referral", icon: <GoCrossReference />, link: "referral" },
  {
    id: 9,
    title: "Profile & Settings",
    icon: <AiOutlineProfile />,
    link: "profile-and-settings",
  },
];

const Sidebar = () => {
  const [notification, setNotification] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const currentPath = location.pathname.replace(/\/+$/, "");

  const activeLink = sidebarLinks.find((link) => {
    const fullLink = link.link ? `/lms/${link.link}` : `/lms`;
    return currentPath === fullLink || currentPath.endsWith(`${fullLink}/`);
  });

  const handleLogout = () => {
    toast.loading("Logging out...");
    dispatch(logoutRequest());
    localStorage.removeItem("login");
    toast.dismiss();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className="fixed top-[12%] z-50 w-full flex items-center justify-between bg-red-600 border border-[white] lg:hidden">
        <div className="flex items-center justify-between py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <span className="text-lg text-white">
              {activeLink?.icon ?? <CiBookmark />}
            </span>
            <h3 className="capitalize text-white">
              {activeLink?.title ?? "Dashboard"}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/notifications")}
              className="font22 flex justify-center items-center ms-5 cursor-pointer mr-1"
            >
              {notification ? (
                <div className="relative">
                  <MdOutlineNotificationsActive className="text-white"/>
                  <span className="absolute top-[-4px] right-[-2px]  rounded-full text-[8px] text-white h-[12px] w-[12px] flex justify-center items-center">
                    {notification >= 9 ? "9+" : notification}
                  </span>
                </div>
              ) : (
                <IoIosNotificationsOutline />
              )}
            </button>
            <button
              className="text-lg text-white active:text-black"
              onClick={() => setToggle(!toggle)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`w-[60%] rounded-lg fixed duration-100 lg:translate-x-0 ease-in-out right-0 top-[120px] z-50 lg:left-0 lg:top-[12%] lg:w-[20%] lg:h-[85vh] ${
          toggle ? "" : "translate-x-96"
        }`}
      >
        <div className="bg-red-600 text-white overflow-y-auto p-2 sidebar-scrollbar h-[60vh] lg:rounded-t-lg lg:h-[67vh]">
          <div className="p-2">
            {sidebarLinks.map((nL) => {
              const fullLink = nL.link ? `/lms/${nL.link}` : `/lms`;
              const isActive =
                currentPath === fullLink ||
                currentPath.endsWith(`${fullLink}/`);

              return (
                <Link
                  key={nL.id}
                  to={fullLink}
                  className={`flex items-center gap-3 text-md rounded-md duration-75 py-2 lg:p-3  
                  ${
                    isActive ? "text-white bg-[#ffffff1a]" : "text-[#ffffffac]"
                  } 
                  hover:text-white`}
                  onClick={() => setToggle(false)}
                >
                  {nL.icon} <span>{nL.title}</span>
                </Link>
              );
            })}
          </div>

          <button
            className="w-full flex items-center gap-3 p-3 text-md justify-center rounded-b-md bg-red-600 duration-75 text-[#ffffffac] cursor-pointer hover:text-white sticky bottom-0"
            onClick={handleLogout}
          >
            <CiLogout /> <span>Logout</span>
          </button>
        </div>

        {/* Upgrade Box */}
        <div className="w-full bg-white text-black rounded-lg shadow-lg text-center pt-3 pb-3">
          <p className="flex justify-center w-full">
            <GoLock className="text-[#80808081] text-[30px] text-center" />
          </p>
          <p className="capitalize text-md break-words">
            Unlock Premium Resources & Features
          </p>
          <button className="capitalize bg-[#DB251B] text-white rounded-full py-2 px-5 font14 border border-[#DB251B] mt-3 duration-75 cursor-pointer hover:bg-white hover:text-black">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
