import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Me from '../assets/me.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#000300] z-50'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <img src={Me} className='rounded-full h-12 w-20 object-cover mr-7'></img>

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Jacks Portfolio</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 hover:border-b-2'>Home</li>
          <li className='p-4 hover:border-b-2'>About</li>
          <li className='p-4 hover:border-b-2'>Skills</li>
          <li className='p-4 hover:border-b-2'>Work</li>
          <li className='p-4 hover:border-b-2'>Experience</li>
          <li className='p-4 ml-12 hover:border-b-2'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul className={nav ? 'fixed top-24 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Jacks Portfolio</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Skills</li>
        <li className='p-4 border-b border-gray-600'>Work</li>
        <li className='p-4 border-b border-gray-600'>Experience</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
