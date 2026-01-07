import React from "react";

const PropertyList = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample property card */}
          <div className="property bg-white p-4 rounded-lg shadow">
            <img
              src="placeholder.jpg"
              alt="Property"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">Property Title</h3>
            <p className="text-gray-600">Location, Price</p>
            <a href="#" className="text-blue-500 hover:underline">
              View Details
            </a>
          </div>
          {/* Repeat the property card as needed */}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
