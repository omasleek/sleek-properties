import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Properties</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="text-gray-700 hover:text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a
                href="#properties"
                className="text-gray-700 hover:text-blue-500"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-500"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
