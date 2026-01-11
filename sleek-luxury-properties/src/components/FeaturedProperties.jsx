import React, { useState } from "react";
import { featuredProperties } from "../data/mockData";
import PropertyModal from "../components/PropertyModal";

const FeaturedPropertiesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="featured-properties" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400 sm:dark:text-white md:dark:text-white lg:dark:text-white">
          Featured{" "}
          <span className="text-yellow-400 sm:dark:text-white md:dark:text-white lg:dark:text-white">
            Properties
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((p, i) => (
            <div
              key={i}
              className="bg-white  dark:bg-blue-900 rounded-xl overflow-hidden shadow hover:-translate-y-2 transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-950 sm:dark:text-white md:dark:text-white lg:dark:text-white">
                  {p.title}
                </h3>
                <p className="text-blue-700 sm:dark:text-white md:dark:text-white lg:dark:text-white">
                  {p.location}
                </p>

                <p className="text-yellow-500 font-bold mt-2">₦{p.price}</p>

                <button
                  onClick={() => setSelected(p)}
                  className="mt-4 w-full bg-yellow-500 py-2 rounded-lg font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default FeaturedPropertiesSection;
