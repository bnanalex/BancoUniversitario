import React from "react";
import Navbar from "../components/NavBar";
import OurServices from "../components/OurServices";
import Footer from "../components/footer"; // Asegúrate que la F esté en mayúscula si el archivo es "Footer.jsx"
import HeroSectionServices from "../components/HeroSectionServices";
import FotoServices from "../assets/images/services/services.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Sección Hero para Servicios */}
        <section>
          <HeroSectionServices />
        </section>

        {/* Sección Principal de Servicios */}
        <section className="mb-20 px-4 md:px-8 lg:px-16">
          <OurServices />
        </section>

        {/* Imagen adicional */}
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
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
