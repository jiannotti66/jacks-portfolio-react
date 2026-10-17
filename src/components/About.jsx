import React from 'react';
import myPic from '../assets/me.jpeg';

const GREEN = '#00df9a';

const highlights = [
  { value: '2028', label: 'Class Of' },
  { value: '5 yrs', label: 'Tech Experience' },
  { value: '300', label: 'Students Mentored' },
];

const involvement = [
  'Association for Computing Machinery at Iowa',
  'Tippie Technology and Innovation Club',
  'UIowa Information Technology Services (ITS)',
];

const interests = [
  'Technology',
  'Programming',
  'Math',
  'Business Analytics',
  'Excel',
  'Web Development',
  'Brazilian Jiu Jitsu'
];

const About = () => {
  return (
    <div id="about" className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">
      <style>{`
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-fade { animation: aboutFadeUp 700ms ease both; }
        .about-delay-1 { animation-delay: 150ms; }
        .about-delay-2 { animation-delay: 300ms; }
        .about-card {
          transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
        }
        .about-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 223, 154, 0.5) !important;
          box-shadow: 0 8px 24px rgba(0, 223, 154, 0.12);
        }
        .about-chip { transition: all 200ms ease; }
        .about-chip:hover {
          background-color: #00df9a !important;
          color: #000 !important;
        }
      `}</style>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: '-10%',
          top: '20%',
          width: 500,
          height: 500,
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 223, 154, 0.07)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1000px] mx-auto px-6 text-gray-300">
        {/* Heading */}
        <div className="about-fade text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white inline-block">
            About <span style={{ color: GREEN }}>Me</span>
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              height: 4,
              width: 80,
              borderRadius: 2,
              backgroundImage: 'linear-gradient(to right, #00df9a, #6ee7b7)',
            }}
          />
        </div>

        {/* Photo + intro */}
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Photo */}
          <div className="about-fade about-delay-1 md:col-span-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute"
                style={{
                  inset: -12,
                  borderRadius: '24px',
                  border: `2px solid ${GREEN}`,
                  transform: 'rotate(4deg)',
                  opacity: 0.5,
                }}
              />
              <img
                src={myPic}
                alt="Jack"
                className="relative object-cover"
                style={{
                  width: 280,
                  height: 340,
                  maxWidth: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0, 223, 154, 0.2)',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-fade about-delay-2 md:col-span-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Hi. I'm <span style={{ color: GREEN }}>Jack</span>, nice to meet you.
              <span className="block text-gray-500 text-2xl md:text-3xl mt-1">
                Enjoy my interactive portfolio!
              </span>
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              I'm deeply passionate about Business Analytics and Programming,
              constantly seeking to explore new technologies and expand my skills
              in the field. Technology has fascinated me since childhood, and now
              I'm eager to apply that passion into a career. In my free time, I
              enjoy staying updated on emerging tech trends and pursuing other
              interests such as sports and fitness.
            </p>
          </div>
        </div>

        {/* Quick highlights */}
        <div className="about-fade about-delay-2 grid grid-cols-3 gap-4 mt-14">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="about-card text-center rounded-lg py-5 px-2"
              style={{
                backgroundColor: '#141414',
                border: '1px solid rgba(0, 223, 154, 0.15)',
              }}
            >
              <div className="text-2xl md:text-4xl font-extrabold" style={{ color: GREEN }}>
                {h.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Education + Involvement */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div
            className="about-card rounded-lg p-6"
            style={{
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <p className="text-sm font-semibold tracking-widest mb-3" style={{ color: GREEN }}>
              EDUCATION
            </p>
            <p className="text-white text-xl font-bold">The University of Iowa</p>
            <p className="text-gray-400 mt-1">
              B.B.A. Business Analytics &amp; Information Systems
            </p>
            <p className="text-gray-500 text-sm mt-1">Class of 2028</p>
          </div>

          <div
            className="about-card rounded-lg p-6"
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
                <li key={item} className="flex items-center gap-3 text-gray-200">
                  <span
                    className="rounded-full flex-shrink-0"
                    style={{ width: 8, height: 8, backgroundColor: GREEN }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold tracking-widest mb-4" style={{ color: GREEN }}>
            INTERESTS
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="about-chip rounded-full text-sm font-medium px-4 py-2 cursor-default"
                style={{
                  color: GREEN,
                  backgroundColor: 'rgba(0, 223, 154, 0.08)',
                  border: '1px solid rgba(0, 223, 154, 0.3)',
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;