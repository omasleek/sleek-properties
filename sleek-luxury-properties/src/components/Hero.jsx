import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.6,
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".hero-btn", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.2,
      });

      gsap.from(".hero-stat", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.9,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen z-0 flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?cs=srgb&fm=jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-blue-950/80 via-blue-900/70 to-blue-950/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <span className="hero-badge inline-block mb-4 px-4 py-1 rounded-full bg-yellow-500 text-blue-900 font-semibold text-sm">
          Trusted Real Estate Experts
        </span>

        <h1 className="hero-title text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Invest Smart. <br />
          <span className="text-yellow-400">Live Sleek.</span> Build Wealth.
        </h1>

        <p className="hero-text text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Discover luxury properties in prime locations designed for comfort,
          security, and long-term value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <a
            href="#featured-properties"
            className="hero-btn px-8 py-3 rounded-lg bg-yellow-500 text-blue-900 font-semibold shadow-lg hover:bg-yellow-400 transition"
          >
            Explore Properties
          </a>
          <a
            href="#contact"
            className="hero-btn px-8 py-3 rounded-lg border border-white/70 hover:bg-white hover:text-blue-900 transition"
          >
            Talk to an Agent
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="hero-stat">
            <h3 className="text-3xl font-bold text-yellow-400">250+</h3>
            <p className="text-blue-100">Premium Properties</p>
          </div>
          <div className="hero-stat">
            <h3 className="text-3xl font-bold text-yellow-400">98%</h3>
            <p className="text-blue-100">Client Satisfaction</p>
          </div>
          <div className="hero-stat">
            <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
            <p className="text-blue-100">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
