import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Logo from "../../../assets/images/logo/builder-logo.png";
import { FaPlus } from "react-icons/fa";

const navLink = [
  {
    id: 1,
    title: "Courses",
    element: [
      {
        name: "Maths",
        link: "/"
      },
      {
        name: "Science",
        link: "/"
      },
      {
        name: "Social",
        link: "/"
      },
      {
        name: "Sports",
        link: "/"
      },
    ]
  },
  {
    id: 2,
    title: "Services",
    element: [
      {
        name: "Resources",
        link: "/"
      },
      {
        name: "Content Writting",
        link: "/"
      },
      {
        name: "Careers",
        link: "/"
      },
      {
        name: "Blog",
        link: "/"
      },
    ]
  },

  {
    id: 3,
    title: "Support",
    element: [
      {
        name: "Getting Started",
        link: "/"
      },
      {
        name: "Help Center",
        link: "/"
      },
      {
        name: "Report a Blog",
        link: "/"
      },
      {
        name: "Chat Support",
        link: "/"
      },
    ]
  },
]

const Footer = () => {
  const [toggle, setToggle] = useState(null)
  return (
    <footer className="theme-bg-lightred theme-para-grey py-8">
      <div className="max-w-auto mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">

          {/* Logo & Description */}
          <div>
            <div className="flex lg:flex-none flex-col items-center justify-center">
              <img src={Logo} alt="Logo" className="h-12 mb-3 " />
              <p className="text-md theme-para-grey  text-center lg:text-left ">
                MakeIAS provides quality, affordable prep for Union and State civil services exams with study material, online classes, and tests. “MAKE ADVANCED KNOWLEDGE EASY.”
              </p>
            </div>
            <div className="flex space-x-4 mt-4 justify-center lg:justify-start my-3">
              <Link to="/" className="theme-text-red hover:text-red-700 text-2xl lg:text-lg">
                <RiFacebookFill />
              </Link>
              <Link to="/" className="theme-text-red hover:text-red-700 text-2xl lg:text-lg">
                <RiTwitterFill />
              </Link>
              <Link to="/" className="theme-text-red hover:text-red-700 text-2xl lg:text-lg">
                <RiInstagramFill />
              </Link>
              <Link to="/" className="theme-text-red hover:text-red-700 text-2xl lg:text-lg">
                <RiLinkedinFill />
              </Link>
              <Link to="/" className="theme-text-red hover:text-red-700 text-2xl lg:text-lg">
                <RiYoutubeFill />
              </Link>
            </div>
          </div>

          {/* Courses */}
          {navLink?.map((items, i) => (
            <div key={items.id} >
              <div className="flex justify-between items-center"
                onClick={() => setToggle(toggle === items.id ? null : items.id)}
              >
                <h3
                  className="text-md font-bold theme-text-red uppercase mb-1 font16 cursor-pointer"
                >
                  {items.title}
                </h3>
                <FaPlus />
              </div>
              {toggle === items.id && (
                <ul className="text-sm theme-para-grey space-y-2">
                  {items.element.map((nL, index) => (
                    <li key={index}>
                      <Link to={nL.link} className="hover:text-red-700 font14">
                        {nL.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}


          {/* Services */}
          {/* <div>
            <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Services</h3>
            <ul className="text-sm theme-para-grey space-y-2">
              <li><Link to="/" className="hover:text-red-700 font14">Resources</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Content Writing</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Careers</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Blog</Link></li>
            </ul>
          </div> */}

          {/* Support */}
          {/* <div>
            <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Support</h3>
            <ul className="text-sm theme-para-grey space-y-2">
              <li><Link to="/" className="hover:text-red-700 font14">Getting Started</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Help Center</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Report a Bug</Link></li>
              <li><Link to="/" className="hover:text-red-700 font14">Chat Support</Link></li>
            </ul>
          </div> */}

          {/* Contact Us */}
          <div>
            <h3 className="text-md font-bold theme-text-red uppercase mb-3 font16">Contact Us</h3>
            <ul className="text-sm theme-para-grey space-y-2 flex w-full flex-wrap justify-center mt-10 gap-3 text-center">
              <li className="mb-0">
                <Link to="tel:+1234567890" className="inline-block hover:theme-text-red text-md">
                  <span className="flex gap-1 items-center">
                    <FiPhone className="theme-text-red" />
                    <span>+123 456 7890</span>
                  </span>
                </Link>
              </li>
              <li className="mb-0">
                <Link to="mailto:contact@company.com" className="inline-block hover:theme-text-red text-md">
                  <span className="flex gap-1 items-center">
                    <FiMail className="theme-text-red" />
                    <span>contact@company.com</span>
                  </span>
                </Link>
              </li>

              <li className="font14 hover:theme-text-red">
                <div className="flex gap-1 items-start">
                  <TfiLocationPin className="theme-text-red" />
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
          <div>Copyright © 2025</div>
          <div className="mt-2">
            All Rights Reserved | <Link to="/" className="theme-text-red hover:text-red-700 ml-2">Terms & Conditions</Link> | <Link to="/" className="theme-text-red hover:text-red-700 ml-2">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
