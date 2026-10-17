import React, { useState } from 'react';
import traderjoes from '../assets/TraderJoesLogo.jpg';
import portillos from '../assets/portilloslogo.jpg';
import target from '../assets/targetlogo.jpg';
import referee from '../assets/AHAILogo.png';
import uiowa from '../assets/uiowalogo copy.png';
import cyera from '../assets/CyeraLogo.png';
import parkdistrict from '../assets/SPD_Logo.jpeg';
// import compsci from '../assets/compsci.png';

const GREEN = '#00df9a';

const tabs = [
  { id: 'tech', label: 'Tech & Professional' },
  { id: 'leadership', label: 'Leadership & Volunteering' },
  { id: 'other', label: 'Other Work' },
];

const workExperiences = [
  // ---------- TECH & PROFESSIONAL ----------
  {
    category: 'tech',
    company: 'University of Iowa IT Services',
    position: 'IT Assistant',
    location: 'Iowa City, IA',
    duration: 'September 2026 - Present',
    current: true,
    tags: ['Technical Support', 'Troubleshooting', 'Documentation'],
    description: [
      'Provide technical support to students, faculty, and staff by troubleshooting hardware, software, account, and connectivity issues.',
      'Diagnose and resolve technical problems while documenting solutions and maintaining accurate support records.',
      'Communicate technical information clearly to users with varying levels of technical experience while delivering efficient, customer-focused service.',
    ],
    imageSrc: uiowa,
  },
  {
    category: 'tech',
    company: 'Cyera',
    position: 'Sales Engineer Intern',
    location: 'Chicago, IL',
    duration: 'June 2026 - August 2026',
    tags: ['Sales Engineering', 'Client Research', 'Technical Communication'],
    description: [
      'Developed tailored technical service plans for prospective and existing customers based on their business and technical needs.',
      'Researched companies, their technology environments, and business challenges to support sales opportunities.',
      'Collaborated with sales teams to translate technical concepts into clear business value.',
    ],
    imageSrc: cyera,
  },

  // ---------- LEADERSHIP & VOLUNTEERING ----------
  {
    category: 'leadership',
    company: 'Comp Sci Kids',
    position: 'Mentor & Volunteer',
    location: 'Hoffman Estates, IL',
    duration: 'August 2021 - May 2024',
    tags: ['Mentoring', 'Public Speaking', 'Teamwork'],
    description: [
      'Helped deliver extracurricular education to 300 incoming high school students, creating a fun and engaging learning environment focused on computer science.',
      'Gained leadership and communication skills by presenting and facilitating group activities as part of a collaborative team.',
    ],
  },
  {
    category: 'leadership',
    company: 'Amateur Hockey Association Illinois (AHAI)',
    position: 'USA Hockey Certified Referee',
    location: 'Illinois',
    duration: 'February 2021 - October 2023',
    tags: ['Decision Making', 'Teamwork', 'Communication'],
    description: [
      'Refereed youth hockey games for players ages 6-13.',
      'Developed teamwork and interpersonal skills by working with a group to ensure smooth operation, including at hockey tournaments.',
    ],
    imageSrc: referee,
  },

  // ---------- OTHER WORK ----------
  {
    category: 'other',
    company: 'Schaumburg Park District',
    position: 'Groundskeeper',
    location: 'Schaumburg, IL',
    duration: 'May 2025 - August 2025',
    tags: ['Reliability', 'Teamwork'],
    description: [
      'Dragged baseball fields and set up parks for ball games, creating a fun and safe environment for all to play sports in Olympic Park.',
      'Cut grass, landscaped, and maintained the whole park to ensure it was up to standard for sports.',
    ],
    imageSrc: parkdistrict,
  },
  {
    category: 'other',
    company: "Trader Joe's",
    position: 'Crew Member / Bagger',
    location: 'Schaumburg, IL',
    duration: 'January 2023 - August 2024',
    tags: ['Customer Service', 'Cash Handling'],
    description: [
      'Welcomed customers, provided assistance, and bagged groceries.',
      'Worked at the cash register and restocked shelves.',
      'Cleaned the store and maintained health regulations.',
    ],
    imageSrc: traderjoes,
  },
  {
    category: 'other',
    company: 'Target',
    position: 'Team Member',
    location: 'Schaumburg, IL',
    duration: 'November 2022 - January 2023',
    tags: ['Customer Service', 'Order Fulfillment'],
    description: [
      'Carried out drive-up orders and stocked shelves.',
      'Provided assistance to customers at the guest service desk and worked at the register.',
    ],
    imageSrc: target,
  },
  {
    category: 'other',
    company: "Portillo's",
    position: 'Cook / Kitchen',
    location: 'Schaumburg, IL',
    duration: 'April 2022 - August 2022',
    tags: ['Fast-Paced Teamwork', 'Customer Service'],
    description: [
      'Prepared, wrapped, and carried out hot dogs and other orders for in-store and drive-through customers.',
      'Greeted customers and helped resolve any problems.',
    ],
    imageSrc: portillos,
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState('tech');
  const [open, setOpen] = useState({});

  const visible = workExperiences.filter((e) => e.category === activeTab);

  const isOpen = (exp, index) =>
    open[exp.company] !== undefined ? open[exp.company] : index === 0;

  const toggle = (exp, index) =>
    setOpen({ ...open, [exp.company]: !isOpen(exp, index) });

  const techCount = workExperiences.filter((e) => e.category === 'tech').length;

  const stats = [
    { value: techCount, label: 'Tech Roles' },
    { value: '300', label: 'Students Mentored' },
    { value: workExperiences.length, label: 'Roles Total' },
  ];

  return (
    <div
      id="work"
      className="bg-black w-full py-10 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 mt-10 md:mt-20 lg:mt-24"
    >
      <style>{`
        @keyframes workFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .work-fade { animation: workFadeUp 400ms ease both; }
        .work-card { transition: border-color 250ms ease, transform 250ms ease, box-shadow 250ms ease; }
        .work-card:hover {
          border-color: rgba(0, 223, 154, 0.5) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 223, 154, 0.12);
        }
        .work-tab { transition: all 250ms ease; cursor: pointer; }
        .work-tab:hover { color: ${GREEN}; border-color: rgba(0, 223, 154, 0.5) !important; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl text-[#00df9a] md:text-4xl lg:text-5xl font-bold text-center mb-3">
          Work Experience
        </h2>
        <p className="text-center text-gray-400 mb-8">
          From technical internships to leadership roles and hands-on jobs.
        </p>

        {/* Quick stats */}
        <div className="flex justify-center gap-4 md:gap-8 mb-10 flex-wrap">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center rounded-lg px-5 py-3"
              style={{
                backgroundColor: '#141414',
                border: '1px solid rgba(0, 223, 154, 0.15)',
                minWidth: 110,
              }}
            >
              <div className="text-2xl md:text-3xl font-extrabold" style={{ color: GREEN }}>
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="work-tab rounded-full px-5 py-2 text-sm md:text-base font-semibold"
                style={{
                  color: active ? '#000' : '#d1d5db',
                  backgroundColor: active ? GREEN : 'transparent',
                  border: `1px solid ${active ? GREEN : 'rgba(255,255,255,0.2)'}`,
                  boxShadow: active ? '0 4px 14px rgba(0, 223, 154, 0.3)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div key={activeTab} className="work-fade relative" style={{ paddingLeft: 36 }}>
          {/* Vertical line */}
          <div
            className="absolute"
            style={{
              left: 11,
              top: 8,
              bottom: 8,
              width: 2,
              backgroundImage:
                'linear-gradient(to bottom, #00df9a, rgba(0, 223, 154, 0.1))',
            }}
          />

          {visible.map((exp, index) => {
            const expanded = isOpen(exp, index);
            return (
              <div key={exp.company} className="relative mb-6">
                {/* Timeline dot */}
                <div
                  className="absolute rounded-full"
                  style={{
                    left: -32,
                    top: 28,
                    width: 14,
                    height: 14,
                    backgroundColor: exp.current ? GREEN : '#000',
                    border: `2px solid ${GREEN}`,
                    boxShadow: exp.current ? '0 0 12px rgba(0, 223, 154, 0.7)' : 'none',
                  }}
                />

                <div
                  className="work-card rounded-lg shadow-md"
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Clickable header */}
                  <button
                    onClick={() => toggle(exp, index)}
                    className="w-full flex items-center text-left p-5 md:p-6"
                    aria-expanded={expanded}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Logo */}
                    <div className="mr-4 flex-shrink-0">
                      {exp.imageSrc ? (
                        <img
                          src={exp.imageSrc}
                          alt={exp.company}
                          className="rounded-full"
                          style={{
                            width: 52,
                            height: 52,
                            objectFit: 'contain',
                            backgroundColor: '#fff',
                            padding: 4,
                          }}
                        />
                      ) : (
                        <div
                          className="rounded-full flex items-center justify-center font-bold text-black text-xl"
                          style={{ width: 52, height: 52, backgroundColor: GREEN }}
                        >
                          {exp.company.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Title block */}
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2">
                        <h3 className="text-lg md:text-xl font-semibold" style={{ color: GREEN }}>
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span
                            className="rounded-full text-xs font-bold px-2 py-0.5"
                            style={{
                              color: '#000',
                              backgroundColor: GREEN,
                            }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-white font-bold text-sm md:text-base">{exp.position}</p>
                      <p className="text-gray-400 italic text-xs md:text-sm">
                        {exp.location} &nbsp;|&nbsp; {exp.duration}
                      </p>
                    </div>

                    {/* Chevron */}
                    <span
                      className="ml-3 text-xl"
                      style={{
                        color: GREEN,
                        transition: 'transform 300ms ease',
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Expandable details */}
                  <div
                    style={{
                      maxHeight: expanded ? 600 : 0,
                      opacity: expanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 400ms ease, opacity 300ms ease',
                    }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <div
                        className="mb-4"
                        style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      />
                      <ul className="list-disc pl-5 space-y-2 text-gray-200 text-sm md:text-base">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full text-xs font-medium px-3 py-1"
                            style={{
                              color: GREEN,
                              backgroundColor: 'rgba(0, 223, 154, 0.1)',
                              border: '1px solid rgba(0, 223, 154, 0.3)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;