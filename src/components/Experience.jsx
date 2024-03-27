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
              className="shadow-lg rounded-lg shadow-[#040c16] bg-[#141414] group container rounder-md flex justify-center items-center mx-auto content-div h-40"
              style={{ cursor: 'pointer' }}>
              <span>Currently, I have work experience in the Retail, Education and Sports industries with a computer science focused education background.</span>
            </div>

            <div
              className="shadow-lg rounded-lg shadow-[#040c16] bg-[#141414] group container rounder-md flex justify-center items-center mx-auto content-div h-40"
              style={{ cursor: 'pointer' }}>
              <br></br> High School Extracuriculars: <br></br>Finance Club,<br></br>{" "}
                  Hack Club, CompSci Kids, Math Team, Italian Heritage Club
            </div>

            <div
              className="shadow-lg rounded-lg shadow-[#040c16] bg-[#141414] group container rounder-md flex justify-center items-center mx-auto content-div h-40"
              style={{ cursor: 'pointer' }}>
              <br></br> Club Sports: <br></br>Hockey 12 Yrs,<br></br>{" "}
                 Soccer (JV) 3yrs, Football (V) 1y, Track and Field 1y
            </div>
        

            </div>
          </div>
        </div>
    );
    
};

export default Experience;