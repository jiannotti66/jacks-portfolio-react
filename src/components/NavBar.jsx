import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import myPic from "../assets/me.jpeg";
import { Link } from "react-scroll";

const GREEN = "#00df9a";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "work", label: "Work" },
  { to: "experience", label: "Experience" },
  { to: "socials", label: "Socials" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 223, 154, 0.15)",
      }}
    >
      {/* Styles for the animated underline + active link */}
      <style>{`
        .nav-link {
          position: relative;
          padding: 8px 14px;
          font-size: 15px;
          font-weight: 500;
          color: #d1d5db;
          cursor: pointer;
          transition: color 200ms ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 2px;
          height: 2px;
          border-radius: 2px;
          background: ${GREEN};
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 250ms ease;
        }
        .nav-link:hover,
        .nav-link.active-link {
          color: ${GREEN};
        }
        .nav-link:hover::after,
        .nav-link.active-link::after {
          transform: scaleX(1);
        }
        .contact-btn {
          margin-left: 16px;
          padding: 9px 20px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          color: #000;
          background: ${GREEN};
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 223, 154, 0.25);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 223, 154, 0.45);
        }
      `}</style>

      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        {/* Logo + name */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={myPic}
            alt="Jack"
            className="rounded-full object-cover"
            style={{
              height: 48,
              width: 48,
              border: `2px solid ${GREEN}`,
              boxShadow: "0 0 12px rgba(0, 223, 154, 0.35)",
            }}
          />
          <span className="text-xl md:text-2xl font-bold" style={{ color: GREEN }}>
            Jack's Portfolio
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              className="nav-link"
            >
              {label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="contact-btn"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav(!nav)}
          className="block md:hidden"
          aria-label={nav ? "Close menu" : "Open menu"}
          style={{ color: nav ? GREEN : "#fff" }}
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu (slides down) */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: nav ? 480 : 0,
          opacity: nav ? 1 : 0,
          transition: "max-height 400ms ease, opacity 300ms ease",
          backgroundColor: "rgba(0, 3, 0, 0.95)",
          borderTop: nav ? "1px solid rgba(0, 223, 154, 0.15)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-2">
          {[...links, { to: "contact", label: "Contact" }].map(({ to, label }) => (
            <li
              key={to}
              style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
                className="block py-4 text-gray-200 cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;