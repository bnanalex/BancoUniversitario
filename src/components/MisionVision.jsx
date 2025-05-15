import React from 'react';
import Vision from '../assets/images/home/vision-mision.jpg';
import MisionIcon from "../assets/icons/mision-svg.svg";
import VisionIcon from "../assets/icons/vision-svg.svg";

const MisionVision = () => {
  return (
    <div className="bg-gray-100 py-[0px] px-[0px] md:px-[0px] flex flex-col gap-[0px]">
      {/* Sección de Texto */}
      <div className="bg-teal-800 py-[40px] px-[20px] flex flex-col items-start gap-6 md:py-[60px] md:px-[130px] md:flex-row md:justify-center md:items-center">
        {/* Sección Misión */}
        <div className="flex flex-col items-center w-full md:max-w-[400px]">
          <div className="flex flex-col items-center mb-4">
            <img 
              src={MisionIcon} 
              alt="Icono misión" 
              className="w-16 h-16 mb-4 object-contain"
            />
            <h2 className="text-white text-[1.75rem] font-bold leading-normal md:text-[2rem]">
              Misión
            </h2>
          </div>
          <p className="text-white text-base font-semibold leading-relaxed max-w-[600px] text-justify px-[15px] md:text-[1.25rem] md:px-[30px]">
            Somos una confiable institución financiera comprometida con los estudiantes universitarios,
            brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión
            de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
          </p>
        </div>
        
        {/* Sección Visión */}
        <div className="flex flex-col items-center w-full md:max-w-[400px]">
          <div className="flex flex-col items-center mb-4">
            <img 
              src={VisionIcon} 
              alt="Icono visión" 
              className="w-16 h-16 mb-4 object-contain"
            />
            <h2 className="text-white text-[1.75rem] font-bold leading-normal md:text-[2rem]">
              Visión
            </h2>
          </div>
          <p className="text-white text-base font-semibold leading-relaxed max-w-[600px] text-justify px-[15px] md:text-[1.25rem] md:px-[30px]">
            Queremos ser la principal opción financiera para estudiantes universitarios en el país.
            Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente
            y nuestro compromiso con la educación y el desarrollo social.
          </p>
        </div>
      </div>
      
      {/* Sección Imagen */}
      <div className="w-full px-[0px] md:px-0">
        <img
          src={Vision}
          alt="vision y mision"
          className="w-full h-auto object-cover shadow-xl"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default MisionVision;
