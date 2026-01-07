import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PropertyList from "./components/PropertyList";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <PropertyList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
