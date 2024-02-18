import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Logo from "../../assets/t-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex  items-center justify-between">
          {/* Logo */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className=" h-36 w-auto" />
          </div>

          {/* Site Map */}
          <div className="w-full md:w-1/3 lg:w-1/2 mb-6 md:mb-0">
            <nav className="space-y-2">
              <Link to="/" className="text-white hover:text-gray-300 block">
                Home
              </Link>
              <Link
                to="/gallary"
                className="text-white hover:text-gray-300 block"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 block"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 block"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/3 lg:w-1/4">{/* <ContactUs /> */}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
