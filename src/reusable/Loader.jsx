import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo/builder-logo.png';

const Loader = ({ progress }) => {
  return (
    <div className="h-lvh w-full fixed top-0 left-0 flex justify-center items-center bg-[white] backdrop-blur-[2px] z-50 pointer-events-none">
      <div className="text-center">
        <div className="animate-pulse">
          <img src={logo} alt="Loader Logo" />
        </div>
        {/* <div className="border-[2px] mt-3 p-1 border-white w-48">
          <div className="h-2 bg-white transition-all duration-200" style={{ width: `${progress}%` }}></div>
        </div> */}
      </div>
    </div>
  );
};

export default Loader;
