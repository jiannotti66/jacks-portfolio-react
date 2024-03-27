import React from 'react'
import leetcodelogo from '../assets/leetcode.png'
import linkedinlogo from '../assets/linkedin.png'
import githublogo from '../assets/github.png'
import xlogo from '../assets/twitter.png'

const Socials = () => {
    return (
        <div name="socials" className="min-h-screen bg-[#000000] pt-60 pt-48">
          <div className="max-w-[1000px] text-gray-300 max-h-fit mx-auto p-4 flex flex-col justify-center">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-[#00df9a] border-gray">
                Socials
              </p>
              <p className="py-6 text-xl">
                Other places to connect with me.
              </p>
              <div className="flex justify-evenly"> {/* Container for images */}
                <a href="https://leetcode.com/jaiann6/" target="_blank" rel="noopener noreferrer">
                  <img src={leetcodelogo} className='size-20' style={{ cursor: 'pointer' }} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/jackiannotti/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinlogo} className='size-20' style={{ cursor: 'pointer' }} alt="LinkedIn" />
                </a>
                <a href="https://github.com/jiannotti66" target="_blank" rel="noopener noreferrer">
                  <img src={githublogo} className='size-20' style={{ cursor: 'pointer' }} alt="GitHub" />
                </a>
                <a href="https://twitter.com/JackIannotti3?" target="_blank" rel="noopener noreferrer">
                  <img src={xlogo} className='size-20' style={{ cursor: 'pointer' }} alt="Your Website" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Socials