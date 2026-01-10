// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PropertySearch from "./components/PropertySearch";
import HeroSection from "./sections/HeroSection";
import TrustedBySection from "./sections/TrustedBySection";
import PropertyList from "./components/PropertyList";

import FeaturedPropertiesSection from "./sections/FeaturedPropertiesSection";
import PropertyModal from "./components/PropertyModal";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import Testimonials from "./components/Testimonials";
import CallToActionSection from "./sections/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initialize state

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Store the preference in localStorage
  useEffect(() => {
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-950 text-blue-100" : "bg-blue-100 text-blue-950"
      } pt-20 transition-all`}
    >
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <PropertySearch/>
      <HeroSection />
      <TrustedBySection />
      <PropertyList />
      <FeaturedPropertiesSection />
      <PropertyModal />
      <WhyChooseUsSection />
      <Testimonials/>
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
