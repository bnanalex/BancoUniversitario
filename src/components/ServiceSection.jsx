import React, { useEffect, useRef, useState } from "react";
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
  const textBlockRef = useRef(null);
  const [imageHeight, setImageHeight] = useState("auto");

  const updateImageHeight = () => {
    if (textBlockRef.current) {
      setImageHeight(`${textBlockRef.current.offsetHeight}px`);
    }
  };

  useEffect(() => {
    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);

  return (
    <div className="bg-gray-100 px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-40">
        {/* Texto y botones */}
        <div ref={textBlockRef} className="flex-1 min-w-[280px] max-w-[500px]">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center md:text-left">
            Nuestros Servicios
          </h2>
          <div className="grid gap-5">
            {services.map((service, index) => (
              <button
                key={index}
                className="w-full bg-white text-gray-800 p-3 rounded-xl font-semibold text-lg shadow-md border border-[#085F63] flex items-center gap-4 text-left hover:bg-[#f0fdfa] hover:-translate-y-0.5 transition"
              >
                <img src={service.icon} alt={`Icono ${index}`} className="w-10 h-10 shrink-0" />
                <span>{service.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div
          className="w-full max-w-[400px] mx-auto md:mx-0 flex-shrink-0"
          style={{ height: imageHeight }}
        >
          <img
            src={Services}
            alt="Servicios"
            className="w-full h-full object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
