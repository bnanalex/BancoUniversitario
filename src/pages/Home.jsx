import React from "react"
import Navbar from "../components/NavBar"   
import Ob from "../components/Objetives"
import Footer from "../components/footer"   
import AboutUs from "./aboutUs"
import OurServices from "./OurServices"

const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Sección Servicios */}

          {/* Sección Servicios */}
          <section className="mb-20">
            <OurServices />
          </section>

          {/* Sección Servicios */}
          <section className="mb-20">
            <AboutUs />
          </section>
  
          {/* Sección Objetivos */}
          <section className="mb-20">
            <Ob/>
          </section>
  
          {/* Sección Contacto */}


          {/* Sección Contacto */}
          <section className="mb-20">
            <Footer />
          </section>
  
        </main>
      </div>
    );
  };
  
  export default Home;