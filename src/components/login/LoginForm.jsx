import React, { useState, useEffect } from 'react';
import InputField from '../../reusable/InputField';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.webp';
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/authActions";
import toast from 'react-hot-toast';
import Loader from '../../reusable/Loader'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordView, setPasswordView] = useState(false);
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const { token, role, loading, error } = useSelector((state) => state.auth || {});

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setInputText((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, checkbox } = inputText;

    if (!checkbox) {
      toast.error("Please Allow Check Box")

      return;
    }

    if (!email || !password) {
      // alert("Email and Password are required!");
      toast.error("Email and Password are required!")
      return;
    }

    dispatch(loginRequest({ email, password }));
  };

  if(loading){
    return <Loader/>
  }

  // useEffect(() => {
  //   console.log("mere token ye hain : ",token)
  //   if (token) {
  //     if (role === "user" ) {
  //       navigate("/lms");
  //     }
  //   }
  // }, [token, role, navigate]);

  return (
    <div className='login h-[50vh] lg:h-[70vh] lg:flex justify-center items-center mt-10 lg:mt-0'>
      <div className="container95">
        <div className="w-full max-w-full lg:max-w-[80%] mx-auto">
          <div className="lg:flex items-center justify-between gap-8 flex-col lg:flex-row">

            {/* Login Form */}
            <div className='w-full'>
              <h1 className='capitalize text-2xl text-left'>Login</h1>
              <p className='capitalize text-left  text-md lg:text-sm mt-1 theme-para-grey'>
                Login to access your TravelWise account
              </p>

              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className='mt-5'>
                  <InputField
                    placeholder="Email"
                    className="text-lg lg:text-sm outline-none text-md py-2 px-2 border border-[#79747E] rounded-sm w-full"
                    name="email"
                    onChange={handleInput}
                    value={inputText.email}
                    required
                    id="email"
                  />
                </div>

                {/* Password Input */}
                <div className='mt-3'>
                  <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                    <InputField
                      placeholder="Password"
                      type={passwordView ? "text" : "password"}
                      className="text-lg lg:text-sm outline-none text-md w-full"
                      name="password"
                      onChange={handleInput}
                      value={inputText.password}
                      required
                      id="password"
                    />
                    {passwordView ? (
                      <IoEyeOutline className='cursor-pointer' onClick={() => setPasswordView(false)} />
                    ) : (
                      <FaEyeSlash className='cursor-pointer' onClick={() => setPasswordView(true)} />
                    )}
                  </div>
                </div>

                {/* Checkbox and Forgot Password */}
                <div className="mt-3">
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="checkbox"
                        checked={inputText.checkbox}
                        onChange={handleInput}
                      />
                      <label htmlFor="rememberMe" className=' text-md lg:text-sm'>Remember Me</label>
                    </div>
                    <Link to='/forgot-password' className='theme-text-red  text-md lg:text-sm cursor-pointer'>
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                {/* Login Button */}
                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className='cursor-pointer w-full text-center bg-[#DB251B] border border-[#DB251B] py-2 text-white rounded-sm hover:bg-[#C12217]  text-md lg:text-sm'
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>

                {/* Error Display */}
                {/* {error && <p className="text-red-500 mt-2 text-sm">{error}</p>} */}

                {/* Sign Up Link */}
                <div className="mt-3 text-center text-md lg:text-sm">
                  <p>Don’t have an account? <Link to='/signup'><span className='text-[#DB251B]'>Sign up</span></Link></p>
                </div>
              </form>
            </div>

            {/* Logo */}
            <div className='hidden lg:block w-full'>
              <img src={logo} alt="logo" className='h-full w-full object-contain' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
