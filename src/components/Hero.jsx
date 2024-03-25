import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className='text-white min-h-screen'>
      <div className='max-w-[800px] mt-[100px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:text-5xl'>
          Hello! I'm Jack
        </p>
        <h1 className='md:text-4xl mt-6 mt- text-xl font-bold text-gray-500'>
          I'm a college student from Chicago
        </h1> 
        <div className="w-fit">
          {/* try to make this wider for the text if possible */}
          <p className='text-center md:text-4xl sm:text-4xl text-6x2 font-bold md:py-8'>I am 18 years old with 3 years of computer science experience. Currently, I'm focused on exploring within the software engineering field. I am open to any work, research, or internship opportunities within my field.</p>
        </div>

        <Link
            className="p-4 hover:border-b cursor-pointer font-bold w-3/5 mx-auto text-white group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#00df9a] hover:border-[#4a4a4a] hover: duration-300"
            style={{ cursor: 'pointer' }} 
            // change this depending on where you want to link to navigate.
            to="work"
            smooth={true}
            duration={500}
        >
          View Work
        </Link>
       
      </div>
    </div>
  );
};

export default Hero;
