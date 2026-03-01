import React, { useEffect } from 'react'
import LoginForm from '../../components/login/LoginForm'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate=useNavigate();
    useEffect(()=>{
    if (localStorage.getItem("login")) {
        navigate("/lms");
        return
    }
},[])


    return  !localStorage.getItem("login") && (
        <>
            <LoginForm />
        </>
    )
}

export default Login