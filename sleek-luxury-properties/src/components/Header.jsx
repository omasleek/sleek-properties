
import React from "react";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy">SLEEK PROPERTIES</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#trusted-by"
                className="text-gray-700 dark:text-gray-300 hover:text-gold"
              >
                Trusted By
              </a>
            </li>
            <li>
              <a
                href="#featured-properties"
                className="text-gray-700 dark:text-gray-300 hover:text-gold"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="text-gray-700 dark:text-gray-300 hover:text-gold"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-300 hover:text-gold"
              >
                Toggle Dark Mode
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
