import React from "react"
import Navbar from "../components/NavBar"   
import HeroSection from "../components/HeroSectionHome"
import ServicesSection from "../components/ServiceSection"
import AboutUs from "../components/aboutUs" ;
import Ob from "../components/Objetives"
import Footer from "../components/footer"   
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />
        {/* Main Content */}          
          {/* Sección Foto Principal */}
          <section className="mb-20">
            <HeroSection />
          </section>

          {/* Sección Servicios */}
          <section className="mb-20">
            <ServicesSection />
          </section>

          {/* Sección Sobre Nosotros */}
          <section className="mb-20">
            <AboutUs />
          </section>
  
          {/* Sección Objetivos */}
          <section className="mb-20">
            <Ob/>
          </section>
  
          {/* Sección Contacto */}
          <section className="mb-20">
            <Footer />
          </section>
  
      </div>
    );
  };
  
  export default Home;