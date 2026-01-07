import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="bg-gray-100 p-4 rounded-lg shadow">
            <p>"Great service and fantastic properties! Highly recommend!"</p>
            <footer className="mt-2 text-right">— Happy Client</footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-4 rounded-lg shadow">
            <p>
              "Found my dream home in no time. Excellent support throughout the
              process!"
            </p>
            <footer className="mt-2 text-right">— Satisfied Customer</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
