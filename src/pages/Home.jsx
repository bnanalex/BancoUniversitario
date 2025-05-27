import React from "react"
import HeroSection from "../components/HeroSectionHome"
import ServicesSection from "../components/ServiceSection"
import AboutUs from "../components/aboutUs" ;
import Ob from "../components/Objetives"
import MisionVision from "../components/MisionVision";
import ProfileOverlay from "../components/ProfileOverlay"
import OurServices from "../components/OurServices"
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-5 py-12">

          {/* Sección imagen principal */}
          <section className="mb-0">
            <HeroSection />
          </section>

          {/* Sección imagen principal */}
          <section className="mb-20">
            <ProfileOverlay />
          </section>

          {/* Sección Servicios */}
          <section className="mb-5">
            <ServicesSection />
          </section>

          {/* Sección Servicios */}
          {/* <section className="mb-5">
            <OurServices />
          </section> */}

          {/* Sección Sobre Nosotros */}
          <section className="mb-20">
            <AboutUs />
          </section>
  
          {/* Sección Objetivos */}
          <section className="mb-5">
            <Ob/>
          </section>

          {/* Sección Mision Vision */}
            <section className="mb-20">
            <MisionVision/>
          </section>
        </main>
      </div>
    );
  };
  
  export default Home;