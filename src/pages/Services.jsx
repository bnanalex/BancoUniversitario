import React from "react";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSectionServices";
import OurServices from "../components/OurServices";
import Footer from "../components/footer";
import HeroSectionServices from "../components/HeroSectionServices";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Sección Hero para Servicios */}
        <section className="mb-20">
          <HeroSectionServices />
        </section>

        {/* Sección Principal de Servicios */}
        <section className="mb-20 px-4 md:px-8 lg:px-16">
          <OurServices />
        </section>

        {/* Sección Principal de Servicios */}
        <section className="mb-20 px-4 md:px-8 lg:px-16">
          <OurServices />
        </section>

        {/* Footer */}
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Services;