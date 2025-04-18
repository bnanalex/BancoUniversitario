import React from "react";
import Navbar from "../components/NavBar";
import OurServices from "../components/OurServices";
import Footer from "../components/footer";
import HeroSectionServices from "../components/HeroSectionServices";
import FotoServices from "../assets/images/services/services.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 mb-20">
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

        {/* Foto */}
        <section className="mb-20">
          <div className="flex justify-center items-center mb-10">
            <img
              src={FotoServices}
              alt="Servicios"
              className="w-full h-auto max-w-[1200px] object-cover rounded-lg shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </div>
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