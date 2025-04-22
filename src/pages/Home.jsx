import React from "react"
<<<<<<< HEAD
import HeroSection from "../components/HeroSectionHome"
import ServicesSection from "../components/ServiceSection"
import AboutUs from "../components/aboutUs" ;
import Ob from "../components/Objetives"
import MisionVision from "../components/MisionVision";
import OurServices from "../components/OurServices"
=======
import Navbar from "../components/NavBar"   
import HeroSection from "../components/Hero"
import Ob from "../components/Objetives"
import ServicesSection from "../components/ServicesSection"
import MisionVision from "../components/MisionVision"
import Footer from "../components/footer"   
>>>>>>> 674f30eb948b86bd20a6f13ad3783403dcda4072
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
<<<<<<< HEAD
=======
        <Navbar />
>>>>>>> 674f30eb948b86bd20a6f13ad3783403dcda4072
        
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
          {/* <section className="mb-5">
            <OurServices />
<<<<<<< HEAD
          </section> */}

          {/* Sección Sobre Nosotros */}
          <section className="mb-20">
=======
          </section>

          {/* Sección Mision y Vision */}
          <section className="mb-5">
            <MisionVision />
          </section>

          {/* Sección Servicios */}
          <section className="mb-5">
>>>>>>> 674f30eb948b86bd20a6f13ad3783403dcda4072
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
<<<<<<< HEAD
        </main>
      </div>
    );
  };
  
=======
  
          {/* Sección Contacto */}
          <section className="mb-5">
            <Footer />
          </section>
          </main>
          </div>
    )
}
>>>>>>> 674f30eb948b86bd20a6f13ad3783403dcda4072
  export default Home;