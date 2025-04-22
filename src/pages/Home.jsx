import React from "react"
import HeroSection from "../components/HeroSectionHome"
import ServicesSection from "../components/ServiceSection"
import AboutUs from "../components/aboutUs" ;
import Ob from "../components/Objetives"
import MisionVision from "../components/MisionVision";
import OurServices from "../components/OurServices"
import Footer from "../components/footer"
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

          {/* Sección Servicios */}
          <section className="mb-5">
            <ServicesSection />
          </section>

          {/* Sección Servicios */}
          <section className="mb-5">
            <OurServices />
          </section>

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
  
          {/* Sección Contacto */}


          {/* Sección Contacto */}
    
          
        </main>
        <section>
            <Footer />
          </section>
      </div>
    );
  };
  
  export default Home;