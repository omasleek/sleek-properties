import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Find Your Dream Home</h2>
        <p className="text-lg mb-4">
          Explore our wide range of properties to find the perfect fit for you.
        </p>
        <a
          href="#properties"
          className="bg-white text-blue-500 py-2 px-4 rounded"
        >
          Explore Properties
        </a>
      </div>
    </section>
  );
};

export default Hero;
