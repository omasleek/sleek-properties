
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-800 text-white text-center">
      <p>
        &copy; {new Date().getFullYear()} SLEEK PROPERTIES. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gold">
          Facebook
        </a>
        <a href="#" className="text-gold">
          Twitter
        </a>
        <a href="#" className="text-gold">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
