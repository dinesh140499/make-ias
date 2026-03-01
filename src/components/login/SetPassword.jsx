import React, { useState, useEffect } from 'react';
import InputField from '../../reusable/InputField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo/logo.webp';
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { updatePasswordRequest } from '../../redux/actions/authActions';
import toast from 'react-hot-toast';

const SetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordView, setPasswordView] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const { passwordUpdated } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== cpassword) {
      return toast.error("Passwords do not match");
    }
    dispatch(updatePasswordRequest({ newPassword, cpassword }));
  };

  useEffect(() => {
    if (passwordUpdated) {
      navigate('/login');
    }
  }, [passwordUpdated]);

  return (
    <div className='login h-[80vh] flex justify-center items-center'>
      <div className="container95">
        <div className="max-w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <div className='w-full'>
              <h1 className='capitalize font22 text-left mt-3'>Set a Password</h1>
              <p className='capitalize text-left font14 theme-para-grey mt-2'>
                Your previous password has been reset. Please set a new password.
              </p>

              <form onSubmit={handleSubmit}>
                <div className='my-5'>
                  <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                    <InputField
                      placeholder="Create Password"
                      type={passwordView ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="outline-none font14 w-full"
                      required={true}
                      name="new-password"
                      id="new-password"
                    />
                    {passwordView ? (
                      <IoEyeOutline className='cursor-pointer' onClick={() => setPasswordView(false)} />
                    ) : (
                      <FaEyeSlash className='cursor-pointer' onClick={() => setPasswordView(true)} />
                    )}
                  </div>
                </div>

                <div className='my-5'>
                  <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                    <InputField
                      placeholder="Re-Enter Password"
                      type={passwordView ? "text" : "password"}
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      className="outline-none font14 w-full"
                      required={true}
                      name="cpassword"
                      id="cpassword"
                    />
                    {passwordView ? (
                      <IoEyeOutline className='cursor-pointer' onClick={() => setPasswordView(false)} />
                    ) : (
                      <FaEyeSlash className='cursor-pointer' onClick={() => setPasswordView(true)} />
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className='cursor-pointer w-full text-center bg-[#DB251B] border border-[#DB251B] py-2 text-white rounded-sm hover:bg-[#C12217]'
                  >
                    Set Password
                  </button>
                </div>
              </form>
            </div>

            <div className='w-full'>
              <img src={logo} alt="logo" className='h-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
