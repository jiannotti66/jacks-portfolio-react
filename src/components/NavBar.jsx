import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import myPic from "../assets/me.jpg"
import { Link } from "react-scroll";

//add leetcode, github etc on the far left

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const aboutRef = useRef(null);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#141414] z-50 h-32">
      <div className="flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 text-white">
        <img
          src={myPic}
          className="rounded-full h-20 w-20 object-cover mr-7"
          alt="Me"
        />
        <h1 className="text-6xl font-bold text-[#00df9a]">Jacks Portfolio</h1>
        <ul className="hidden md:flex">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="socials"
            smooth={true}
            duration={500}
          >
            Socials
          </Link>
          <Link
            className="p-4 hover:border-b ml-20 cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed top-32 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-4xl font-bold text-[#00df9a] m-4">
    
        </h1>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="socials"
            smooth={true}
            duration={500}
          >
            Socials
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link
            className="p-4 hover:border-b cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div ref={aboutRef}></div>
    </div>
  );
};

export default Navbar;
