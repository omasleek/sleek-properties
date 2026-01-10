
import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    "Secure Investment",
    "Prime Locations",
    "Verified Listings",
    "Professional Agents",
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{reason}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
