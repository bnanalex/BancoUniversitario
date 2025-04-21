import React from "react";
import Service1Icon from "../assets/icons/service-1-vr-svg.svg";
import Service2Icon from "../assets/icons/service-2-vr-svg.svg";
import Service3Icon from "../assets/icons/service-3-vr-svg.svg";
import Service4Icon from "../assets/icons/service-4-vr-svg.svg";
import Service5Icon from "../assets/icons/service-5-vr-svg.svg";
import Services from "../assets/images/home/services-web.jpg";

const services = [
  { icon: Service1Icon, text: "Transferencias entre estudiantes sin comisión" },
  { icon: Service2Icon, text: "Depósitos en efectivo" },
  { icon: Service3Icon, text: "Retiros en efectivo" },
  { icon: Service4Icon, text: "Cobro de becas estudiantiles" },
  { icon: Service5Icon, text: "Pago de matrícula estudiantil" }
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20">
        {/* Contenido de texto */}
        <div className="w-full md:w-1/2 max-w-xl">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center md:text-left">
            Nuestros Servicios
          </h2>
          <div className="grid gap-5">
            {services.map((service, index) => (
              <button
                key={index}
                className="w-full bg-white text-gray-800 p-4 rounded-xl font-medium text-base md:text-lg shadow-md border border-[#085F63] flex items-center gap-4 text-left hover:bg-[#f0fdfa] hover:-translate-y-0.5 transition duration-200"
              >
                <img src={service.icon} alt={`Icono ${index}`} className="w-10 h-10 shrink-0" />
                <span className="flex-1">{service.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 max-w-sm">
          <img
            src={Services}
            alt="Servicios"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
