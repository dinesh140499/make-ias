import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Logo from "../../assets/images/logo/builder-logo.png";
import FooterMobile from './mobile/Footer'
import useIsMobile from '../../customHook/useIsMobile'

const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile ? <FooterMobile /> :
        <footer className="theme-bg-lightred theme-para-grey py-8">
          <div className="max-w-auto mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

              {/* Logo & Description */}
              <div>
                <div className="flex lg:flex-none flex-col items-center justify-center">
                  <img src={Logo} alt="Logo" className="h-12 mb-3 " />
                  <p className="text-sm theme-para-grey  text-center lg:text-left ">
                    MakeIAS provides quality, affordable prep for Union and State civil services exams with study material, online classes, and tests. “MAKE ADVANCED KNOWLEDGE EASY.”
                  </p>
                </div>
                <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
                  <Link to="/" className="theme-text-red hover:text-red-700 text-lg">
                    <RiFacebookFill />
                  </Link>
                  <Link to="/" className="theme-text-red hover:text-red-700 text-lg">
                    <RiTwitterFill />
                  </Link>
                  <Link to="/" className="theme-text-red hover:text-red-700 text-lg">
                    <RiInstagramFill />
                  </Link>
                  <Link to="/" className="theme-text-red hover:text-red-700 text-lg">
                    <RiLinkedinFill />
                  </Link>
                  <Link to="/" className="theme-text-red hover:text-red-700 text-lg">
                    <RiYoutubeFill />
                  </Link>
                </div>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Courses</h3>
                <ul className="text-sm theme-para-grey space-y-2">
                  <li><Link to="/" className="hover:text-red-700 text-md">Maths</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Science</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Social</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Sports</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Services</h3>
                <ul className="text-sm theme-para-grey space-y-2">
                  <li><Link to="/" className="hover:text-red-700 text-md">Resources</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Content Writing</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Careers</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Blog</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Support</h3>
                <ul className="text-sm theme-para-grey space-y-2">
                  <li><Link to="/" className="hover:text-red-700 text-md">Getting Started</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Help Center</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Report a Bug</Link></li>
                  <li><Link to="/" className="hover:text-red-700 text-md">Chat Support</Link></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Contact Us</h3>
                <ul className="text-sm theme-para-grey space-y-2">
                  <li>
                    <Link to="mailto:contact@company.com" className="inline-block hover:theme-text-red text-md">
                      <span className="flex gap-1 items-center">
                        <FiMail className="theme-text-red" />
                        <span>contact@company.com</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+1234567890" className="inline-block hover:theme-text-red text-md">
                      <span className="flex gap-1 items-center">
                        <FiPhone className="theme-text-red" />
                        <span>+123 456 7890</span>
                      </span>
                    </Link>
                  </li>
                  <li className="text-md hover:theme-text-red">
                    <div className="flex gap-1 items-start">
                      <TfiLocationPin className="theme-text-red mt-1" />
                      <span>
                        1234 Street Name<br />
                        San Francisco, CA
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm theme-para-grey">
              <div>© 2025 MakeIAS</div>
              <div className="mt-2">
                All Rights Reserved | <Link to="/" className="theme-text-red hover:text-red-700 ml-2">Terms & Conditions</Link> | <Link to="/" className="theme-text-red hover:text-red-700 ml-2">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>}
    </>
  );
};

export default Footer;
