import React, { useState, useEffect } from 'react';
import InputField from '../../reusable/InputField';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.webp';
import { IoIosArrowBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtpRequest } from '../../redux/actions/authActions';


const VerifyCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordView, setPasswordView] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    let interval;

    if (resendOtp && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setResendOtp(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendOtp, timer]);

  const handleResendOtp = () => {
    setResendOtp(true);
    setTimer(30); 
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const { email , otpVerified} = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Email from Redux:", email); 
  }, [email]);

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    dispatch(verifyOtpRequest({ email, otp }));
  };

  useEffect(() => {
    if (otpVerified) {
      navigate('/set-password');
    }
  }, [otpVerified]);

  return (
    <div className='login h-[80vh] flex justify-center items-center'>
      <div className="container95">
        <div className="max-w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <div className='w-full'>
              <button 
                className='flex items-center gap-1 font16 duration-75 cursor-pointer hover:text-[#DB251B]' 
                onClick={() => navigate(-1)}
              > 
                <IoIosArrowBack /> Back To Login
              </button>

              <h1 className='capitalize font22 text-left mt-3'>Verify code</h1>
              <p className='capitalize text-left font14 theme-para-grey mt-2'>
                An authentication code has been sent to your email.
              </p>

              <form>
                {/* Code Input */}
                <div className='my-5'>
                  <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                    <InputField
                      placeholder="Enter Code"
                      type={passwordView ? "text" : "password"}
                      className="outline-none font14 w-full"
                      required={true}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      name="otp"
                    />
                    {passwordView ? (
                      <IoEyeOutline className='cursor-pointer' onClick={() => setPasswordView(false)} />
                    ) : (
                      <FaEyeSlash className='cursor-pointer' onClick={() => setPasswordView(true)} />
                    )}
                  </div>
                </div>

                {/* Resend OTP */}
                <div className="mt-3 font14 text-left">
                  {resendOtp ? (
                    <p>
                      Didn’t receive a code? <span className='text-[#DB251B]'>{formatTime(timer)}</span>
                    </p>
                  ) : (
                    <p>
                      Didn’t receive a code? 
                      <span className='text-[#DB251B] cursor-pointer' onClick={handleResendOtp}> Resend</span>
                    </p>
                  )}
                </div>

                {/* Verify Button */}
                <div className="mt-5">
                  <button onClick={handleVerifyOtp} className='cursor-pointer w-full text-center bg-[#DB251B] border border-[#DB251B] py-2 text-white rounded-sm hover:bg-[#C12217]'>
                    Verify
                  </button>
                </div>
              </form>
            </div>

            {/* Logo Section */}
            <div className='w-full'>
              <img src={logo} alt="logo" className='h-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
