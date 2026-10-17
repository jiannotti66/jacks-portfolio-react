import React, { useState } from 'react';
import { Link } from 'react-scroll';

const GREEN = '#00df9a';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white flex items-center"
    >
      {/* Soft glow behind the content */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '50%',
          top: '33%',
          width: 500,
          height: 500,
          transform: 'translate(-50%, -50%)',
          borderRadius: '9999px',
          backgroundColor: 'rgba(0, 223, 154, 0.10)',
          filter: 'blur(64px)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-24 text-center">
        {/* Status pill */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium"
          style={{
            color: GREEN,
            border: '1px solid rgba(0, 223, 154, 0.3)',
            backgroundColor: 'rgba(0, 223, 154, 0.1)',
          }}
        >
          <span
            className="animate-pulse rounded-full"
            style={{ width: 8, height: 8, backgroundColor: GREEN }}
          />
          Open to work, research &amp; internships
        </div>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Hi! I'm{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(to right, #00df9a, #6ee7b7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Jack
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-5 max-w-2xl text-lg font-semibold text-gray-400 sm:text-xl md:text-2xl">
          Student studying Business Analytics and Information Systems at the
          University of Iowa
        </h2>

        {/* Divider */}
        <div
          className="my-8"
          style={{
            height: 1,
            width: 96,
            backgroundImage:
              'linear-gradient(to right, transparent, #00df9a, transparent)',
          }}
        />

        {/* Intro */}
        <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
          I'm 20 years old with 5 years of experience in technology and
          business analytics. Right now, I'm exploring these fields and am open
          to work, research, and internship opportunities.
        </p>

        {/* Button */}
        <Link
          to="work"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mt-10 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-8 py-3 font-bold text-black"
          style={{
            backgroundColor: GREEN,
            transition: 'all 300ms ease',
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hovered
              ? '0 10px 30px rgba(0, 223, 154, 0.45)'
              : '0 8px 20px rgba(0, 223, 154, 0.2)',
          }}
        >
          View Work
          <span
            style={{
              transition: 'transform 300ms ease',
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          >
            →
          </span>
        </Link>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 hidden animate-bounce text-gray-500 md:block"
        style={{ left: '50%', marginLeft: -6 }}
      >
        ↓
      </div>
    </section>
  );
};

export default Hero;