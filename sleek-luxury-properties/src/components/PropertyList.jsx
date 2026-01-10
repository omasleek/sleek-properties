import React from "react";

const properties = [
  {
    title: "Luxury Duplex",
    location: "Lekki Phase 1",
    price: "₦250,000,000",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    title: "Modern Apartment",
    location: "Victoria Island",
    price: "₦180,000,000",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    title: "Smart Family Home",
    location: "Ajah",
    price: "₦120,000,000",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    title: "Penthouse Suite",
    location: "Ikoyi",
    price: "₦350,000,000",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    title: "Cozy Bungalow",
    location: "Yaba",
    price: "₦95,000,000",
    image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
  },
  {
    title: "Beachfront Villa",
    location: "Oniru",
    price: "₦500,000,000",
    image: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
  },
  {
    title: "Serviced Apartment",
    location: "Gbagada",
    price: "₦85,000,000",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  },
  {
    title: "Executive Mansion",
    location: "Magodo",
    price: "₦420,000,000",
    image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
  },
];

const PropertyList = () => {
  return (
    <section id="properties" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Available <span className="text-yellow-400">Properties</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, i) => (
            <div
              key={i}
              className="bg-white dark:bg-blue-900 rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-1"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {property.title}
                </h3>
                <p className="text-gray-600 dark:text-blue-200 text-sm">
                  {property.location}
                </p>
                <p className="text-yellow-500 font-bold mt-2">
                  {property.price}
                </p>

                <button className="mt-4 w-full py-2 rounded-lg bg-yellow-500 text-blue-950 font-semibold hover:bg-yellow-400 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
