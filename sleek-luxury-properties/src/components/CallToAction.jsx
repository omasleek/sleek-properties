
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-linear-to-r from-yellow-400 to-yellow-300 text-blue-950 text-center">
      <h2 className="text-4xl font-extrabold mb-6">
        Start Your Property Journey Today
      </h2>
      <a
        href="#contact"
        className="inline-block mt-4 px-8 py-3 bg-blue-950 text-white rounded-lg font-semibold shadow hover:bg-blue-900 transition"
      >
        Contact Us
      </a>
    </section>
  );
};

export default CallToAction;
