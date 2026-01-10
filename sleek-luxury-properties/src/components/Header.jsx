import React from "react";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
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

        {/* CTA + Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-block px-5 py-2 rounded-lg bg-yellow-400 text-blue-950 font-semibold shadow hover:bg-yellow-300 transition"
          >
            Contact Agent
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
