import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../reusable/Loader'

const ProtectedLayout = ({ children }) => {
    const { token, role, error, loading } = useSelector((state) => state.auth || {});
    const location = useLocation();

    if (loading) {
        return <Loader />
    }
    if (!localStorage.getItem("login")) {
        return <Navigate to="/login" state={{ from: location }}  />;
    }

    return children || <Outlet />;
};

export default ProtectedLayout;
