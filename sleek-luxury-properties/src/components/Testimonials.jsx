import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aisha Lawal",
    role: "Home Owner, Lekki",
    image:
      "https://images.pexels.com/photos/4262424/pexels-photo-4262424.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Sleek Properties made buying my first home stress-free.",
  },
  {
    name: "Emeka Okafor",
    role: "Investor",
    image:
      "https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Top-tier service and excellent ROI opportunities.",
  },
  {
    name: "Fatima Musa",
    role: "Land Owner",
    image:
      "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Professional, honest, and very responsive team.",
  },
  {
    name: "Samuel Adeyemi",
    role: "Consultant",
    image:
      "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Smooth transactions and premium listings.",
  },
  {
    name: "Blessing Nwoye",
    role: "First-time Buyer",
    image:
      "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "They guided me from start to finish perfectly.",
  },
  {
    name: "Ibrahim Sadiq",
    role: "Commercial Client",
    image:
      "https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&w=600",
    text: "Highly reliable real estate partners.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-10 dark:text-white">
        Client <span className="text-yellow-400">Testimonials</span>
      </h2>

      <div className="max-w-xl mx-auto bg-white dark:bg-blue-900 p-8 rounded-xl shadow-lg transition">
        <img
          src={t.image}
          alt={t.name}
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />
        <p className="italic text-gray-600 dark:text-white mb-4">"{t.text}"</p>
        <h4 className="font-semibold text-blue-900">{t.name}</h4>

        <p className="text-sm text-blue-600">{t.role}</p>
      </div>
    </section>
  );
};

export default Testimonials;
