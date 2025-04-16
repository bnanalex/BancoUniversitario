import React from "react";
 import Service1Icon from "../assets/icons/service-1-vr-svg.svg";
 import Service2Icon from "../assets/icons/service-2-vr-svg.svg";
 import Service3Icon from "../assets/icons/service-3-vr-svg.svg";
 import Service4Icon from "../assets/icons/service-4-vr-svg.svg";
 import Service5Icon from "../assets/icons/service-5-vr-svg.svg";
 import Services from '../assets/images/home/services-web.jpg';
 
 const services = [
   { icon: Service1Icon, text: "Transferencias entre estudiantes sin comisión" },
   { icon: Service2Icon, text: "Depósitos en efectivo" },
   { icon: Service3Icon, text: "Retiros en efectivo" },
   { icon: Service4Icon, text: "Cobro de becas estudiantiles" },
   { icon: Service5Icon, text: "Pago de matrícula estudiantil" }
 ];
 
 const ServicesSection = () => {
   return (
     <div className="bg-gray-100 p-[60px_5%] flex flex-wrap gap-10 justify-between items-start">
       <div className="flex-initial order-2 max-w-[500px] ml-auto md:order-2">
         <img
           src={Services}
           alt="servicios"
           className="w-106 h-146 ml-auto object-cover rounded-lg shadow-xl mx-auto md:max-w-4xl block"
           loading="lazy"
           decoding="async"
         />
       </div>
       
       <div className="flex-1 min-w-[400px] max-w-[600px] order-1">
         <div className="w-full text-center mb-8 text-teal-800">
           <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
           <div className="grid gap-5 max-w-[550px] mx-auto">
             {services.map((service, index) => (
               <div key={index}>
                 <button className="w-full bg-white text-gray-800 p-2 rounded-xl font-semibold text-xl shadow-md border-1 border-[#0f766e] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#f0fdfa] hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#0f766e]/30 flex items-center gap-5 text-center">
                   <img 
                     src={service.icon} 
                     alt={`Icono servicio ${index + 1}`} 
                     className="w-15 h-15 shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
                   />
                   <span>{service.text}</span>
                 </button>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default ServicesSection;