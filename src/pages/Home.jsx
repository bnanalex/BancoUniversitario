import React from "react"
import HeroSection from "../components/HeroSectionHome"
import ServicesSection from "../components/ServiceSection"
import AddContact from "../components/AddContact"
import ContactsMenu from "../components/ContactsMenu"
import ContactInfo from "../components/ContactInfo"
import DeleteContactDialog from "../components/DeleteContactDialog"
import TransactionSucess from "../components/TransactionSucess"
import Comprobante from "../components/Comprobante"
import AboutUs from "../components/aboutUs" ;
import Ob from "../components/Objetives"
import MisionVision from "../components/MisionVision";
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

          {/* Sección Servicios */}
          <section className="mb-5">
            <ServicesSection />
          </section>

          {/* Sección Caja Saldo (Debe ir dentro de la Banca en linea) */}
          {/*<section className="mb-0">
            <AddContact /
          </section>>*/}

          {/* Menú de Contactos (Debe ser accesible desde el menú lateral al iniciar sesión) */}
          {/*<section className="mb-5">
            <ContactsMenu />
          </section > */}

          {/* Información del Contacto (Debe ser accesible desde el menú de contactos al seleccionar el contacto y hacer clic en "ver contacto") */}
          {/*<section className="mb-5">
            <ContactInfo />
          </section >*/}

          {/* Menú de Eliminar Contacto (Debe ser accesible desde el menú de contactos al seleccionar el contacto y hacer clic en "eliminar") */}
          {/*<section className="mb-5">
            <DeleteContactDialog />
          </section >*/}

          {/* Menú de Contacto Eliminado (Debe ser accesible desde el menú de Elinimar contacto al hacer clic en "Aceptar") */}
          <section className="mb-5">
            <TransactionSucess />
          </section >

          {/* Menú de Comprobante (Debe ser accesible desde la seccion de movimientos dentro de la banca en linea, al hacer clic en "Ver Más" en un determinado movimiento) */}
          {/*<section className="mb-5">
            <Comprobante />
          </section >*/}

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