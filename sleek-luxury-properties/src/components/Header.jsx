import React, { useState } from "react";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
          SLEEK<span className="text-yellow-400">PROPERTIES</span>
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          {[
            { name: "Trusted By", link: "#trusted-by" },
            { name: "Properties", link: "#featured-properties" },
            { name: "Why Us", link: "#why-choose-us" },
            { name: "Testimonials", link: "#testimonials" },
          ].map((item, i) => (
            <a key={i} href={item.link} className="relative group font-medium">
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA + Toggle + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="hidden sm:px-4 sm:py-2 sm:rounded-lg sm:text-sm sm:font-medium sm:border sm:border-yellow-400 sm:text-yellow-400 sm:hover:bg-yellow-400 sm:hover:text-blue-950 sm:transition px-3 py-1 text-xs border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 transition"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>

          <a
            href="#contact"
            className="hidden lg:inline-block px-5 py-2 rounded-lg bg-yellow-400 text-blue-950 font-semibold shadow hover:bg-yellow-300 transition"
          >
            Contact Agent
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-white/10">
          <nav className="px-6 py-4 flex flex-col gap-4 text-white">
            {[
              { name: "Trusted By", link: "#trusted-by" },
              { name: "Properties", link: "#featured-properties" },
              { name: "Why Us", link: "#why-choose-us" },
              { name: "Testimonials", link: "#testimonials" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="font-medium hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg text-sm font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 transition"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-yellow-400 text-blue-950 font-semibold shadow hover:bg-yellow-300 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Agent
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
