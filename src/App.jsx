import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ReasonSection from "./sections/ReasonSection/ReasonSection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import CallToAction from "./sections/CallToAction/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start bg-white">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <ReasonSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
