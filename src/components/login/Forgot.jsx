import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import InputField from '../../reusable/InputField';
import { forgotPasswordRequest } from '../../redux/actions/authActions';
import logo from '../../assets/images/logo/logo.webp';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, forgotMessage, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    dispatch(forgotPasswordRequest(email));
  };

  useEffect(() => {
    if (forgotMessage) {
      navigate('/verify-code', { state: { email } });
    }
  }, [forgotMessage, navigate, email]);

  return (
    <div className='login h-[50vh] lg:h-[80vh] flex justify-center items-center'>
      <div className="container95">
        <div className="lg:max-w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <div className='w-full'>
              <button
                className='flex items-center gap-1 font16 duration-75 cursor-pointer hover:text-[#DB251B]'
                onClick={() => navigate(-1)}
              >
                Back To Login
              </button>

              <h1 className='capitalize font22 text-left mt-3'>Forgot your password?</h1>
              <p className='capitalize text-left font14 theme-para-grey mt-3'>
                Don’t worry, happens to all of us. Enter your email below to recover your password
              </p>

              <form onSubmit={handleSubmit}>
                <div className='mt-5'>
                  <InputField
                    placeholder="Email"
                    className="outline-none font14 py-2 px-2 border border-[#79747E] rounded-sm w-full"
                    required={true}
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className='cursor-pointer w-full text-center bg-[#DB251B] border border-[#DB251B] py-2 text-white rounded-sm hover:bg-[#C12217]'
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* Logo Section */}
            <div className='w-full hidden lg:block'>
              <img src={logo} alt="logo" className='h-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;