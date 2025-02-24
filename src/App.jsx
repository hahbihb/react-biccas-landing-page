import { useState } from "react";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Companies from "./sections/Companies";
import About from "./sections/About";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <About />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
