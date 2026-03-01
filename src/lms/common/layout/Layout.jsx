import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../reusable/ScrollToTop';

const Layout = () => {
    return (
        <>
            <div>
                <Topbar />
                <div className="lg:ms-[17rem] xl:ms-[18rem] lg:w-[78%] lg:h-[85vh] mt-[100px] lg:mt-0">
                    <Outlet />
                </div>
                <Sidebar />
            </div>
            <ScrollToTop />
        </>
    )
}

export default Layout