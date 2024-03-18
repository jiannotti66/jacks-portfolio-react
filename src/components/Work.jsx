import React from 'react';

const Work = () => {
  // Dummy data representing work experiences
  const workExperiences = [
    {
      company: "ABC Corp",
      position: "Software Engineer",
      duration: "Jan 2020 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ac odio vehicula cursus.",
      imageSrc: "/path/to/image1.jpg" // change images here
    },
    {
      company: "XYZ Tech",
      position: "Web Developer",
      duration: "Jun 2018 - Dec 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ac odio vehicula cursus.",
      imageSrc: "/path/to/image2.jpg" // change images here
    },
    // add more later
  ];

  return (
    <div id='work' className="bg-black min-h-screen w-full py-10 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 overflow-y-auto mt-10 md:mt-20 lg:mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#00df9a] md:text-4xl lg:text-5xl font-bold text-center mb-10">Work Experience</h2>
        {workExperiences.map((experience, index) => (
          <div key={index} className="bg-[#141414] rounded-lg shadow-md p-6 md:p-8 mb-6 flex items-center">
            <div className="mr-4">
              <img src={experience.imageSrc} alt={experience.company} className="w-12 h-12 rounded-full" /> {/* Adjust the width and height as needed */}
            </div>
            <div>
              <h3 className="text-xl text-[#00df9a] md:text-2xl font-semibold mb-2">{experience.company}</h3>
              <p className="text-white text-sm md:text-base mb-2">{experience.position}</p>
              <p className="text-white text-sm md:text-base mb-2">{experience.duration}</p>
              <p className="text-white md:text-base">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
