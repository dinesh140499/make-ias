import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const navLink = [
    {
        id: 1,
        title: 'Account Setting',
        element: '',
    },
    {
        id: 2,
        title: 'Login & Security',
        element: 'login-and-security',
    },
    {
        id: 3,
        title: 'Notifications',
        element: 'notifications',
    },
];

const Layout = () => {
    const [tab, setTab] = useState(navLink[0].title);
    const navigate = useNavigate();
    const location = useLocation()
    const currentPath = location.pathname.replace('/profile-and-settings/', '');
    const currentTab = navLink.find(link => link.element === currentPath)?.title || navLink[0].title;

    const handleTab = (element) => {
        const selected = navLink.find((item) => item.element === element);
        if (selected) {
            setTab(selected.title);
            navigate(`/profile-and-settings/${selected.element}`);
        }
    };

    useEffect(() => {
        handleTab("")
    }, [])

    return (
        <>
            <Helmet>
                <title>{currentTab}</title>
            </Helmet>
            <div className='container95'>
                <div className='flex items-center gap-5'>
                    {navLink.map((item) => (
                        <button
                            key={item.id}
                            className={`cursor-pointer font-medium font16 px-1 ${(item.element === currentPath)
                                ? 'text-[#D74632] border-b-[2px] border-[#D74632]'
                                : 'text-[#585858] border-b-[2px] border-[#E0E4EC]'
                                }`}
                            onClick={() => handleTab(item.element)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className='mt-5'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
