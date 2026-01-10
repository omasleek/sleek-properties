import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-blue-950 text-gray-700 dark:text-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            SLEEK PROPERTIES
          </h3>
          <p>
            Premium real estate solutions for smart investors and homeowners.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Lekki, Lagos, Nigeria
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone /> +234 800 000 0000
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} Sleek Properties. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
