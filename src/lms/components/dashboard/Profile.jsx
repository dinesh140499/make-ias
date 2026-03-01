import React from "react";
import profile from "../../assets/images/logo/builder-logo.png";
import logo from "../../assets/images/logo/builder-logo.png";
import { Link } from "react-router-dom";


const Profile = () => {
  let login = JSON.parse(localStorage.getItem("login"));
  return (
    <div className="flex items-center justify-between px-2 gap-5 mb-5 fixed h-20 top-0 left-0 z-50 bg-white w-full lg lg:relative lg:h-auto ">
      <Link to={"/"} className="lg:hidden">
        <img src={logo} className="h-10" alt="logo" />
      </Link>
      <div className="flex items-center gap-2 lg:gap-5 ">
        <img
          src={profile}
          alt=""
          className="rounded-full h-[45px] w-[45px] flex items-center justify-center object-contain shadow-sm lg:h-[60px] lg:w-[60px]"
        />
        <div className="text-center lg:text-start">
          <h3 className="capitalize text-sm lg:text-md">Welcome {login && login?.name}</h3>
          <p className="capitalize text-[12px] text-sm theme-para-grey lg:mt-1">
            Here Overview Of Your Course
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
