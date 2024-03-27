import React from 'react';
import traderjoes from '../assets/traderjoes.jpeg'
import portillos from '../assets/portillos.jpeg'
import target from '../assets/target.jpeg'
import referee from '../assets/referee.jpg'

const Work = () => {

  const workExperiences = [
    {
      company: "Trader Joes",
      position: "Crew/Bagger" ,
      duration: "Janurary 2023 - Present",
      description: " - Welcomed customers as well as providing assistance and bagging the grocieries. Cleaning up the store and restocking shelves.",
      imageSrc: traderjoes 
    },
    {
      company: "Target",
      position: "Team Member" ,
      duration: "November 2022 - Janurary 2023",
      description: " - Carried out orders for drive up, stocked shelves, provided assistance for customers at guest service desk, worked at register.",
      imageSrc: target 
    },
    {
      company: "Portillos",
      position: "Cook/Kitchen",
      duration: "April 2022 - August 2022",
      description: " - Prepared, wrapped and carried out hot dogs and orders containing hotdogs for in-store and drive through. Helped customers with problems as well as greeting customers.",
      imageSrc: portillos 
    },
    {
      company: "Amateur Hockey Association Illinois (AHAI)",
      position: "USA Hockey Certified Referee",
      duration: "Feb 2021 - October 2023",
      description: " - Referee for youth hockey games from ages 6-13.",
      imageSrc: referee 
    },

  ];

  return (
    <div id='work' className="bg-black min-h-screen w-full py-10 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 overflow-y-auto mt-10 md:mt-20 lg:mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00df9a] md:text-4xl lg:text-5xl font-bold text-center mb-10">Work Experience:</h2>
        {workExperiences.map((experience, index) => (
          <div key={index} className="bg-[#141414] rounded-lg shadow-md p-6 md:p-8 mb-6 flex items-center">
            <div className="mr-4">
              <img src={experience.imageSrc} alt={experience.company} className="w-12 h-12 rounded-full" /> {/* Adjust the width and height as needed */}
            </div>
            <div>
              <h3 className="text-xl text-[#00df9a] md:text-2xl font-semibold mb-2">{experience.company}</h3>
              <p className="text-white font-bold text-sm md:text-base mb-2">{experience.position}</p>
              <p className="text-white italic text-sm md:text-base mb-2">{experience.duration}</p>
              <p className="text-white md:text-base">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
