import React from 'react';

const GREEN = '#00df9a';

const involvement = [
  'Association of Computing Machinery',
  'Tippie Technology and Innovation Club',
  'CompSci Kids',
];

const interests = [
  'Programming',
  'Technology',
  'Data Science',
  'Fitness',
  'Brazilian Jiu Jitsu',
  'Hockey',
  'Lifting',
];

const Experience = () => {
  return (
    <div id="experience" className="bg-black pt-32 pb-20">
      <style>{`
        .exp-card {
          transition: transform 250ms ease, border-color 250ms ease;
        }
        .exp-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 223, 154, 0.5) !important;
        }
      `}</style>

      <div className="max-w-[1000px] text-gray-300 mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experiences and <span style={{ color: GREEN }}>Involvements</span>
          </h2>
          <div
            className="mx-auto mt-4 mb-5"
            style={{
              height: 4,
              width: 80,
              borderRadius: 2,
              backgroundImage: 'linear-gradient(to right, #00df9a, #6ee7b7)',
            }}
          />
          <p className="text-lg md:text-xl text-gray-400">
            Here is a handful of activities I have been involved in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Summary */}
          <div
            className="exp-card rounded-lg p-6"
            style={{
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <p className="text-sm font-semibold tracking-widest mb-3" style={{ color: GREEN }}>
              EXPERIENCE
            </p>
            <p className="text-gray-200 leading-relaxed">
              Currently, I have work experience in IT Support, Sales Engineering
              and Groundskeeping with a Business Analytics and Information
              Systems (BAIS) education background.
            </p>
          </div>

          {/* Involvement */}
          <div
            className="exp-card rounded-lg p-6"
            style={{
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <p className="text-sm font-semibold tracking-widest mb-3" style={{ color: GREEN }}>
              INVOLVEMENT
            </p>
            <ul className="space-y-2">
              {involvement.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <span
                    className="rounded-full flex-shrink-0"
                    style={{ width: 8, height: 8, backgroundColor: GREEN, marginTop: 8 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div
            className="exp-card rounded-lg p-6"
            style={{
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <p className="text-sm font-semibold tracking-widest mb-3" style={{ color: GREEN }}>
              INTERESTS
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full text-sm px-3 py-1"
                  style={{
                    color: GREEN,
                    backgroundColor: 'rgba(0, 223, 154, 0.08)',
                    border: '1px solid rgba(0, 223, 154, 0.3)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;