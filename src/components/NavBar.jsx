import React, { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Me from '../assets/me.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const aboutRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleAbout = () => {
    if (aboutRef.current) {
      // console.log("scrolling")
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNav(false);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#000300] z-50 h-32'>
      <div className='flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 text-white'>
        <img src={Me} className='rounded-full h-20 w-20 object-cover mr-7' alt='Me' />
        <h1 className='text-6xl font-bold text-[#00df9a]'>Jacks Portfolio</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 hover:border-b cursor-pointer'>Home</li>
          <li className='p-4 hover:border-b cursor-pointer' onClick={handleAbout}>About</li>
          <li className='p-4 hover:border-b cursor-pointer'>Skills</li>
          <li className='p-4 hover:border-b cursor-pointer'>Work</li>
          <li className='p-4 hover:border-b cursor-pointer'>Experience</li>
          <li className='p-4 ml-12 hover:border-b cursor-pointer'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <ul className={nav ? 'fixed top-32 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='text-4xl font-bold text-[#00df9a] m-4'>Jacks Portfolio</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600' onClick={handleAbout}>About</li>
        <li className='p-4 border-b border-gray-600'>Skills</li>
        <li className='p-4 border-b border-gray-600'>Work</li>
        <li className='p-4 border-b border-gray-600'>Experience</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
      <div ref={aboutRef}></div>
    </div>
  );
};

export default Navbar;
