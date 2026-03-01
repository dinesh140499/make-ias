import React from 'react';
import { FaRegAddressBook } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SectionHeading from '../../common/heading/SectionHeading';
import useIsMobile from '../../customHook/useIsMobile';
import { useDispatch } from 'react-redux';
import { requestCallAdd } from '../../redux/actions/homeActions';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mail: Yup.string().email('Invalid email').required('Email is required'),
  phoneNum: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const About = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    mail: '',
    phoneNum: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(requestCallAdd(values));
    resetForm();
  };

  return (
    <section className="about lg:mt-[50px]">
      <div className="container95">
        <div className="lg:flex">
          <div className="lg:left lg:flex-2">
            <SectionHeading
              Icon={FaRegAddressBook}
              title="About Us"
              subTitle="Your Trusted Companion for IAS Preparation"
            />
            <p className="theme-text-grey text-justify mt-2 lg:max-w-[90%] font16 leading-relaxed theme-para-grey">
            We are committed to being the ultimate companion for IAS aspirants, offering a seamless and comprehensive platform tailored for success in the UPSC exams. Our carefully designed learning ecosystem includes expertly curated courses, live and pre-recorded sessions, and comprehensive test series that cover both Prelims and Mains preparation. With personalized mentorship from experienced educators and up-to-date digital current affairs, we ensure aspirants stay informed and confident throughout their journey. Our platform provides rank-based performance analytics, helping students identify their strengths and areas for improvement, while our easy access to high-quality study materials ensures learning is both effective and efficient. Whether it’s accessing premium study resources, scheduling tests, or reviewing performance reports, we strive to make the learning experience smooth, accessible, and impactful. Join thousands of successful aspirants who trust us to guide them towards achieving their dreams of becoming a civil servant. Your success is our mission.
            </p>
          </div>

          <div className="right flex-1 lg:pl-5 mt-5 lg:mt-0">
            <div className="theme-bg-red rounded-lg p-4">
              <h4 className="uppercase font14 text-left text-white">Get In Touch</h4>
              <h3 className="font22 font-medium mt-1 text-white">Request Call Back</h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleBlur, values }) => (
                  <Form className="text-white mt-4">
                    <div className="mb-3">
                      <Field
                        name="name"
                        placeholder="Your Name"
                        className="bg-white text-black font13 py-2 px-2 w-full rounded-sm"
                      />
                      <ErrorMessage name="name" component="div" className="text-yellow-200 text-sm mt-1" />
                    </div>

                    <div className="mb-3">
                      <Field
                        name="mail"
                        type="email"
                        placeholder="Your Email"
                        className="bg-white text-black font13 py-2 px-2 w-full rounded-sm"
                      />
                      <ErrorMessage name="mail" component="div" className="text-yellow-200 text-sm mt-1" />
                    </div>

                    <div className="mb-3">
                      <Field
                        name="phoneNum"
                        type="tel"
                        maxLength="10"
                        placeholder="Phone"
                        className="bg-white text-black font13 py-2 px-2 w-full rounded-sm"
                      />
                      <ErrorMessage name="phoneNum" component="div" className="text-yellow-200 text-sm mt-1" />
                    </div>

                    <div className="mb-3">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        className="w-full resize-none bg-white rounded-sm text-black text-sm py-2 px-2"
                      />
                      <ErrorMessage name="message" component="div" className="text-yellow-200 text-sm mt-1" />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 theme-bg-black py-2 px-2 rounded-sm text-sm cursor-pointer"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
