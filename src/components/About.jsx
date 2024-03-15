// About.js

import React from 'react';

const About = () => {
    return (
        <div id="about" className='min-h-screen bg-black pt-60'>
            <div className='flex flex-col justify-center items-center text-gray-300 w-full p-10 max-h-fit h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-6xl font-bold inline' style={{ borderBottom: '4px solid #00df9a' }}>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] max-h-fit w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-6xl font-bold'>
                        <p>Hi. I'm Jack, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-xl'>I'm deeply passionate about software engineering, constantly seeking to explore new technologies and expand my skills in the field. Technology has fascinated me since childhood, and now I'm eager to apply that passion to developing software and websites. In my free time, I enjoy staying updated on emerging tech trends and pursuing interests like sports and fitness.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
