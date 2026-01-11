import React, { useEffect, useState } from "react";

const stats = [
  { value: 10000, label: "Happy Clients" },
  { value: 250, label: "Luxury Properties" },
  { value: 98, label: "Client Satisfaction (%)" },
  { value: 15, label: "Years Experience" },
  { value: 20, label: "Prime Locations" },
];

const TrustedBySection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) =>
          num < stats[i].value ? num + Math.ceil(stats[i].value / 60) : num
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trusted-by" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-14 sm:dark:text-white md:dark:text-white lg:dark:text-white">
        Trusted <span className="text-yellow-400">By</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto px-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white sm:dark:bg-white md:dark:bg-white lg:dark:bg-white p-6 rounded-xl shadow"
          >
            <h3 className="text-4xl font-bold text-yellow-400">{counts[i]}+</h3>
            <p className="text-blue-900 sm:dark:text-black md:dark:text-black lg:dark:text-black font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
