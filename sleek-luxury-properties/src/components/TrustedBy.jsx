
import React from "react";
import { statsData } from "../data/mockData";

const TrustedBy = () => {
  return (
    <section id="trusted-by" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted By</h2>
        <div className="flex justify-around">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
