import React from "react";
import HeroSection from "../components/HeroSectionHome";
import ServicesSection from "../components/ServiceSection";
import AboutUs from "../components/AboutUs"; // Cambiado a mayúscula
import Objetives from "../components/Objetives"; // Nombre exacto
// import CajaSaldo from "../components/CajaSaldo"
// import ContactsMenu from "../components/ContactsMenu"
// import ContactInfo from "../components/ContactInfo"
// import DeleteContactDialog from "../components/DeleteContactDialog"
// import DeletedContact from "../components/DeletedContact"
// import Comprobante from "../components/Comprobante"
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
          {/* Sección Caja Saldo (Debe ir dentro de la Banca en linea) */}
          {/*<section className="mb-0">
            <CajaSaldo />
          </section>*/}

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
          {/*<section className="mb-5">
            <DeletedContact />
          </section >*/}

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