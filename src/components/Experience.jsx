import React from 'react';

const Experience = () => {
  return (
    <div id='experience' className="relative w-48 h-48 bg-gray-200 rounded-lg overflow-hidden group">
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <p className="text-white text-lg">Hover to reveal</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Title</h3>
          <p className="text-white">Content here</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
