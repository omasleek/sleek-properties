
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero-subtitle", {
      duration: 1,
      delay: 0.3,
      y: -50,
      opacity: 0,
    });
    gsap.from(".cta-button", { duration: 1, delay: 0.6, scale: 0, opacity: 0 });
  }, []);

  return (
    <section className="hero bg-navy text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="hero-title text-5xl font-bold mb-4">
          Invest Smart, Live Sleek
        </h1>
        <p className="hero-subtitle text-lg mb-8">
          Discover luxury properties that build your future.
        </p>
        <a
          href="#featured-properties"
          className="cta-button bg-gold text-navy py-2 px-4 rounded-lg shadow hover:bg-opacity-75"
        >
          Explore Properties
        </a>
        <a
          href="#contact"
          className="cta-button ml-4 bg-gold text-navy py-2 px-4 rounded-lg shadow hover:bg-opacity-75"
        >
          Contact Agent
        </a>
      </div>
    </section>
  );
};

export default Hero;
