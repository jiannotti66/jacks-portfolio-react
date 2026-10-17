import React from 'react';
import leetcodelogo from '../assets/leetcode.png';
import linkedinlogo from '../assets/linkedin.png';
import githublogo from '../assets/github.png';

const GREEN = '#00df9a';

// Put your PDF in the /public folder with exactly this name
const RESUME_PATH = 'JACK RESUME copy.pdf';

const socials = [
  {
    name: 'LeetCode',
    handle: 'jaiann6',
    href: 'https://leetcode.com/jaiann6/',
    logo: leetcodelogo,
  },
  {
    name: 'LinkedIn',
    handle: 'Jack Iannotti',
    href: 'https://www.linkedin.com/in/jackiannotti/',
    logo: linkedinlogo,
  },
  {
    name: 'GitHub',
    handle: 'jiannotti66',
    href: 'https://github.com/jiannotti66',
    logo: githublogo,
  },
];

const Socials = () => {
  return (
    <div id="socials" className="relative bg-black pt-32 pb-24 overflow-hidden">
      <style>{`
        @keyframes socialsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .socials-fade { animation: socialsFadeUp 700ms ease both; }
        .socials-delay { animation-delay: 200ms; }
        .social-card {
          transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
        }
        .social-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 223, 154, 0.6) !important;
          box-shadow: 0 12px 30px rgba(0, 223, 154, 0.18);
        }
        .social-card:hover img { transform: scale(1.1); }
        .social-card img { transition: transform 250ms ease; }
        .resume-btn-primary {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .resume-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 223, 154, 0.5) !important;
        }
        .resume-btn-secondary { transition: all 200ms ease; }
        .resume-btn-secondary:hover {
          background-color: rgba(0, 223, 154, 0.12) !important;
          border-color: #00df9a !important;
        }
        .resume-paper { transition: transform 400ms ease; }
        .resume-wrap:hover .resume-paper { transform: rotate(0deg) scale(1.03); }
      `}</style>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '-10%',
          top: '30%',
          width: 500,
          height: 500,
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 223, 154, 0.07)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1000px] mx-auto px-6 text-gray-300">
        {/* Heading */}
        <div className="socials-fade text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let's <span style={{ color: GREEN }}>Connect</span>
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
            Other places to connect with me.
          </p>
        </div>

        {/* Social links */}
        <div className="socials-fade grid grid-cols-1 sm:grid-cols-3 gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card flex flex-col items-center rounded-xl py-8 px-4 text-center"
              style={{
                backgroundColor: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
              }}
            >
              <img
                src={s.logo}
                alt={s.name}
                style={{ width: 64, height: 64, objectFit: 'contain' }}
              />
              <p className="text-white text-lg font-bold mt-4">{s.name}</p>
              <p className="text-sm mt-1" style={{ color: GREEN }}>
                {s.handle}
              </p>
            </a>
          ))}
        </div>

        {/* Resume card */}
        <div
          className="socials-fade socials-delay mt-12 rounded-2xl p-8 md:p-10"
          style={{
            backgroundColor: '#141414',
            border: '1px solid rgba(0, 223, 154, 0.25)',
            backgroundImage:
              'linear-gradient(135deg, rgba(0, 223, 154, 0.08), rgba(0, 0, 0, 0) 60%)',
            boxShadow: '0 20px 50px rgba(0, 223, 154, 0.08)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Mini resume preview */}
            <div className="resume-wrap flex justify-center">
              <div
                className="resume-paper"
                style={{
                  width: 220,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  padding: 18,
                  transform: 'rotate(-4deg)',
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 223, 154, 0.25)',
                }}
              >
                <div style={{ height: 10, width: '60%', backgroundColor: '#111', borderRadius: 2 }} />
                <div style={{ height: 5, width: '85%', backgroundColor: '#bbb', borderRadius: 2, marginTop: 8 }} />
                <div style={{ height: 2, width: '100%', backgroundColor: GREEN, marginTop: 12 }} />

                {[
                  [70, 95, 80, 60],
                  [55, 90, 75],
                  [65, 85, 70, 50],
                ].map((section, i) => (
                  <div key={i} style={{ marginTop: 14 }}>
                    <div style={{ height: 6, width: '40%', backgroundColor: '#333', borderRadius: 2 }} />
                    {section.map((w, j) => (
                      <div
                        key={j}
                        style={{
                          height: 4,
                          width: `${w}%`,
                          backgroundColor: '#ddd',
                          borderRadius: 2,
                          marginTop: 6,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Text + buttons */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold tracking-widest mb-3" style={{ color: GREEN }}>
                RESUME
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Here is a copy of my resume.
              </h3>
              <p className="text-gray-400 mt-3 mb-7 text-base md:text-lg">
                Download a copy of my resume to see my education, experience, and
                skills all in one place.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={RESUME_PATH}
                  download="Jack_Iannotti_Resume.pdf"
                  className="resume-btn-primary inline-flex items-center gap-2 rounded-lg px-7 py-3 font-bold text-black"
                  style={{
                    backgroundColor: GREEN,
                    boxShadow: '0 6px 18px rgba(0, 223, 154, 0.3)',
                    cursor: 'pointer',
                  }}
                >
                  <span></span>Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;