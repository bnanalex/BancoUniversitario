import React from "react"
import Navbar from "../components/NavBar"   
import HeroSection from "../components/Hero"
import Ob from "../components/Objetives"
import ServicesSection from "../components/ServicesSection"
import MisionVision from "../components/MisionVision"
import Footer from "../components/footer"   
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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

          {/* Sección Mision y Vision */}
          <section className="mb-5">
            <MisionVision />
          </section>

          {/* Sección Servicios */}
          <section className="mb-5">
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
          <section className="mb-5">
            <Footer />
          </section>
          </main>
          </div>
    )
}
  export default Home;