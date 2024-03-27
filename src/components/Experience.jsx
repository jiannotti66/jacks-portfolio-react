import React from 'react';

const Experience = () => {
  return (
      <div name="experience" className="min-h-screen bg-[#000000] pt-60 pt-48"> {/* Increase padding to pt-48 */}
  
        <div className="max-w-[1000px] text-gray-300 max-h-fit mx-auto p-4 flex flex-col justify-center">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-[#00df9a] border-gray">
              My Experience
            </p>
            <p className="py-6 text-xl">
              Explore a handful of my diverse experiences.
            </p>
          </div>
          <div className="grid h-150 items-center sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div
              className="shadow-lg rounded-lg shadow-[#040c16] bg-[#141414] group container rounder-md flex justify-center items-center mx-auto content-div h-40 relative h-40 overflow-hidden"
              style={{ cursor: 'pointer' }} 
            >

              {/* need to fix these 3 components so the original text can go away and interchange when hover is on/off.
               first complete the first one then copy&paste into next 2. */}

               {/* Orig Text */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-100">
                <span className="flex justify-center items-center h-full font-bold">School</span>
              </div>
              {/* Hover Effects */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex justify-center items-center h-full">
                  <span className="text-white text-lg opacity-100">Hover Text</span>
                </div>
              </div>
            </div>

            <div
              className="shadow-lg rounded-lg shadow-[#040c16] bg-[#141414] group container rounder-md flex justify-center items-center mx-auto content-div h-40"
              style={{ cursor: 'pointer' }} 
            >
              {/* Hover Effects */}
              <div className="opacity-0 text-center group-hover:opacity-100 ">
                <span className="text-l text-white tracking-wider">
                  <br></br> High School Extracuriculars: <br></br>Finance Club,<br></br>{" "}
                  Hack Club, CompSci Kids, Math Team, Italian Heritage Club
                </span>
              </div>
            </div>
            <div
          
              className="shadow-lg rounded-lg shadow-[#040c16] group bg-[#141414] container rounder-md flex justify-center items-center mx-auto content-div h-40"
              style={{ cursor: 'pointer' }} 

            >
              {/* Hover Effects */}
              <div className="opacity-0 text-center group-hover:opacity-100 ">
                <span className="text-l text-white tracking-wider">
                  Club Sports: <br></br> Hockey - 12 years<br></br>
                  <br></br> High School Sports: <br></br>Soccer (JV), Football (V), Track
                  and Field 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default Experience;
