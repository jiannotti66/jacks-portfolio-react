import React from 'react';
import { Typed } from 'react-typed'; // Correct import

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:text-5xl'>
          Hello! Im Jack
        </p>
        <h1 className='md:text-4xl text-xl font-bold text-gray-500'>
          Im a college student from chicago
        </h1> 
        <div class="w-full">
          {/* try to make this wider for the text if possible */}
          <p class='md:text-4xl sm:text-6xl text-4xl font-bold md:py-10'>I am 18 years old with 4 years of computer science experience. Currently, I'm focused on exploring within the cybersecurity field. I am open to any work, research, or internship opportunities within my field.</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>

  );
};

export default Hero;
