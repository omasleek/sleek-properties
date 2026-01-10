import React from "react";

const PropertySearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by location or title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-1/2 px-4 py-2 rounded-lg border dark:bg-blue-900"
    />
  );
};

export default PropertySearch;
