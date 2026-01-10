
import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    "Secure Investment",
    "Prime Locations",
    "Verified Listings",
    "Professional Agents",
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why <span className="text-yellow-400">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Secure Investment",
            "Prime Locations",
            "Verified Listings",
            "Professional Agents",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-blue-950 p-6 rounded-xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {reason}
              </h3>
              <p className="text-blue-200">
                We ensure quality, security, and long-term value.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
