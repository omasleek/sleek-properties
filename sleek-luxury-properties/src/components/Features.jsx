import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="feature bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p>Short description of feature one.</p>
          </div>
          <div className="feature bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p>Short description of feature two.</p>
          </div>
          <div className="feature bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p>Short description of feature three.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
