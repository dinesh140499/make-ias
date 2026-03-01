import React, { useEffect, useState } from "react";
import InputField from "../../reusable/InputField";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import logo from "../../assets/images/logo/logo.webp";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../redux/actions/authActions";
import toast from "react-hot-toast";
import Loader from "../../reusable/Loader";

const validateField = (name, value, formData) => {
  let error = "";
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^.{6,}$/;

  switch (name) {
    case "fname":
    case "lname":
      if (!value) error = "This field is required";
      else if (!nameRegex.test(value)) error = "Only alphabets allowed";
      break;
    case "email":
      if (!value) error = "Email is required";
      else if (!emailRegex.test(value)) error = "Invalid email address";
      break;
    case "mobileNum":
      if (!value) error = "Mobile number is required";
      else if (!mobileRegex.test(value)) error = "Enter valid 10-digit mobile number";
      break;
    case "password":
      if (!passwordRegex.test(value)) error = "Minimum 6 characters required";
      break;
    case "cpassword":
      if (value !== formData.password) error = "Passwords do not match";
      break;
    default:
      break;
  }

  return error;
};

const Register = () => {
  const { token, role, loading, error } = useSelector((state) => state.auth || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordView, setPasswordView] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobileNum: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "mobileNum" ? value.replace(/\D/g, "").slice(0, 10) : value;
    const updated = { ...formData, [name]: sanitizedValue };
    setFormData(updated);
    const error = validateField(name, sanitizedValue, updated);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key], formData);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    if (!agreeTerms) {
      toast.error("Please accept Terms and Privacy Policy");
      return;
    }

    dispatch(registerRequest(formData));
  };

  useEffect(() => {
    if (token) {
      toast.success("Registration successful!");
      navigate("/dashboard");
    }
    if (error) {
      toast.error(error);
    }
  }, [token, error, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="login py-10 lg:h-[90vh] flex justify-center items-center">
          <div className="container95">
            <div className="lg:max-w-[80%] mx-auto">
              <div className="lg:flex items-center justify-between">
                {/* Logo Section */}
                <div className="hidden lg:block w-full">
                  <img src={logo} alt="logo" className="h-full w-full" />
                </div>

                <div className="w-full">
                  <h1 className="capitalize text-2xl text-left">Sign Up</h1>
                  <p className="capitalize text-left text-md theme-para-grey">
                    Let’s get you all set up so you can access your personal account.
                  </p>

                  <form onSubmit={handleSubmit}>
                    {/* First Name & Last Name */}
                    <div className="lg:flex items-center gap-3">
                      <div className="mt-5 w-full">
                        <InputField
                          placeholder="First Name"
                          className="text-lg lg:text-md py-2 px-2 border border-[#79747E] rounded-sm w-full"
                          type="text"
                          name="fname"
                          onChange={handleChange}
                        />
                        {formErrors.fname && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.fname}</p>}
                      </div>
                      <div className="mt-5 w-full">
                        <InputField
                          placeholder="Last Name"
                          className="text-lg lg:text-md py-2 px-2 border border-[#79747E] rounded-sm w-full"
                          type="text"
                          name="lname"
                          onChange={handleChange}
                        />
                        {formErrors.lname && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.lname}</p>}
                      </div>
                    </div>

                    {/* Email & Mobile */}
                    <div className="lg:flex items-center gap-3">
                      <div className="mt-3 w-full">
                        <InputField
                          placeholder="Email"
                          className="text-lg lg:text-md py-2 px-2 border border-[#79747E] rounded-sm w-full"
                          name="email"
                          onChange={handleChange}
                        />
                        {formErrors.email && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.email}</p>}
                      </div>
                      <div className="mt-3 w-full">
                        <InputField
                          placeholder="Phone Number"
                          className="text-lg lg:text-md py-2 px-2 border border-[#79747E] rounded-sm w-full"
                          type="number"
                          name="mobileNum"
                          onChange={handleChange}
                        />
                        {formErrors.mobileNum && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.mobileNum}</p>}
                      </div>
                    </div>

                    {/* Passwords */}
                    <div className="lg:flex items-center gap-3">
                      <div className="mt-3 w-full">
                        <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                          <InputField
                            placeholder="Password"
                            type={passwordView ? "text" : "password"}
                            className="w-full"
                            name="password"
                            onChange={handleChange}
                          />
                          {passwordView ? (
                            <IoEyeOutline className="cursor-pointer" onClick={() => setPasswordView(false)} />
                          ) : (
                            <FaEyeSlash className="cursor-pointer" onClick={() => setPasswordView(true)} />
                          )}
                        </div>
                        {formErrors.password && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.password}</p>}
                      </div>

                      <div className="mt-3 w-full">
                        <div className="flex items-center py-2 px-2 border border-[#79747E] rounded-sm">
                          <InputField
                            placeholder="Confirm Password"
                            type={passwordView ? "text" : "password"}
                            className="w-full"
                            name="cpassword"
                            onChange={handleChange}
                          />
                          {passwordView ? (
                            <IoEyeOutline className="cursor-pointer" onClick={() => setPasswordView(false)} />
                          ) : (
                            <FaEyeSlash className="cursor-pointer" onClick={() => setPasswordView(true)} />
                          )}
                        </div>
                        {formErrors.cpassword && <p className="text-red-600 lg:text-sm mt-1 lg:mt-0">{formErrors.cpassword}</p>}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="my-6 flex items-center justify-between flex-col lg:flex-row">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                        />
                        <label htmlFor="terms" className="text-md capitalize">
                          I agree to the <span className="theme-text-red">Terms</span> and{" "}
                          <span className="theme-text-red">Privacy Policies</span>
                        </label>
                      </div>
                      <Link to="/forgot-password" className="theme-text-red text-md">
                        Forgot Password?
                      </Link>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#DB251B] border border-[#DB251B] py-2 text-white rounded-sm hover:bg-[#C12217]"
                    >
                      Create Account
                    </button>

                    {/* Already have account */}
                    <div className="mt-5 text-center">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#DB251B]">Login</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
