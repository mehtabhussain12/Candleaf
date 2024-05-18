import React from 'react';
import footer from "../assets/footer.png"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#272727] text-gray-300 py-12 flex  items-center justify-center">
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Company Info */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img src={footer} alt="" />
            <p className="text-gray-400">
              Leading the way in innovation and customer satisfaction. Our mission is to provide the best products for your needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#about" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#services" className="hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#products" className="hover:text-white">Products</a></li>
              <li className="mb-2"><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex mb-4">
              <a href="https://facebook.com" className="mr-4 text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
              <a href="https://twitter.com" className="mr-4 text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            </div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: info@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
