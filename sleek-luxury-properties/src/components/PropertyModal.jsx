import React from "react";

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-blue-900 p-6 rounded-xl max-w-lg w-full">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold text-blue-950 dark:text-white">
          {property.title}
        </h3>

        <p className="text-gray-600 dark:text-blue-200">{property.location}</p>
        <p className="text-yellow-500 text-xl font-bold mt-2">
          {property.price}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-yellow-500 rounded-lg font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PropertyModal;
