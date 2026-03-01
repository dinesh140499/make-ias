import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const isLoginPage = location.pathname === '/login';
    const isLMSRoute = location.pathname.startsWith('/lms');
  
    if (!auth && isLMSRoute) {
      navigate('/login', { replace: true });
    }
  
    if (auth && isLoginPage) {
      navigate('/lms', { replace: true });
    }
  }, [auth, location.pathname, navigate]);
  



  return <>{children}</>;
};

export default AuthProvider;
