import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#000000] min-h-screen mt-20 text-white py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-5xl text-[#00df9a] font-extrabold font-serif mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#141414] rounded-lg">
            <h3 className="text-2xl font-serif text-[#00df9a] font-bold mb-4">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Swift</li>
            </ul>
          </div>
          <div className="p-6 bg-[#141414] rounded-lg">
            <h3 className="text-2xl font-serif text-[#00df9a] font-bold mb-4">Frameworks & Libraries</h3>
            <ul className="list-disc list-inside">
              <li>React.js</li>
              <li>Node</li>
              <li>Git</li>
              {/* add one more. */}
            </ul>
          </div>
          <div className="p-6 bg-[#141414] rounded-lg">
            <h3 className="text-2xl font-serif text-[#00df9a] font-bold mb-4">Tools & Technologies</h3>
            <ul className="list-disc list-inside">
              <li>Visual Studio Code</li>
              <li>IntelliJ</li>
              <li>XCode</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="p-6 bg-[#141414] rounded-lg">
            <h3 className="text-2xl font-serif text-[#00df9a] font-bold mb-4">Additional Skills</h3>
            <ul className="list-disc list-inside">
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Adaptability</li>
              <li>Debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
