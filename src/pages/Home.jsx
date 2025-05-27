import React from "react";
import HeroSection from "../components/HeroSectionHome";
import ServicesSection from "../components/ServiceSection";
import AboutUs from "../components/AboutUs"; // Cambiado a mayúscula
import Objetives from "../components/Objetives"; // Nombre exacto
import MisionVision from "../components/MisionVision";
import Transferencia from "../components/ProfileOverlay"; // Nombre corregido
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-5 py-12">
        {/* Sección Hero/HeroSection */}
        <section className="mb-0">
          <HeroSection />
        </section>

        {/* Sección Perfil */}
        <section className="mb-20">
          <Transferencia />
        </section>

        {/* Sección Servicios */}
        <section className="mb-5">
          <ServicesSection />
        </section>

        {/* Sección Nuestros Servicios (actualmente comentada) */}
        {/* <section className="mb-5">
          <OurServices />
        </section> */}

        {/* Sección Sobre Nosotros */}
        <section className="mb-20">
          <AboutUs />
        </section>

        {/* Sección Objetivos */}
        <section className="mb-5">
          <Objetives />
        </section>

        {/* Sección Misión y Visión */}
        <section className="mb-20">
          <MisionVision />
        </section>
      </main>
    </div>
  );
};

export default Home;