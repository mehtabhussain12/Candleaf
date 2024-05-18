import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/logo.png'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Hero from './Hero';
const Navbar_Desktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
  <>
 <main>
 <nav className='lg:flex md:flex sm:hidden hidden justify-between items-center mx-24 mt-6 cursor-pointer'>
    <div>
        <img src={logo} alt="" />
    </div>
    <div className=' font-Roboto ' >
        <ul className='flex gap-12'>
        <li><a href="">Discovery</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
        </ul>
    </div>
    <div className='flex gap-4 text-2xl cursor-pointer'>
        <IoPersonOutline  />
        <MdOutlineShoppingCart/>
    </div>
  </nav>
  {/* Mobile  */}
  <nav className='flex justify-between items-center lg:hidden md:hidden sm:flex px-12 pt-2 pb-2  border-b-2'>
      <div className='flex items-center'>
        {isOpen ? (
          <MdClose className='text-2xl mr-4 cursor-pointer' onClick={toggleMenu} />
        ) : (
          <MdMenu className='text-2xl mr-4 cursor-pointer' onClick={toggleMenu} />
        )}
        <img src={logo} alt='Logo' className='h-8' />
      </div>
      <div className={`md:hidden fixed top-16 left-0  w-full h-full rounded-md flex justify-center items-center z-50 bg-opacity-90   bg-white text-black ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='p-4'>
          <li><a href="">Discovery</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className='flex gap-4 text-2xl cursor-pointer'>
        <IoPersonOutline />
        <MdOutlineShoppingCart />
      </div>
    </nav>
 </main>
  <Hero/>
  </>
  )
}

export default Navbar_Desktop
