import React from 'react';

const Objetivos = () => {
  const objetivos = [
    {
      icono: 'icons/objectives-svg.svg',
      contenido: 'Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos de atención presencial.'
    },
    {
      icono: 'icons/objectives-svg.svg',
      contenido: 'Fomentar el uso de nuestras plataformas digitales para hacer transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.'
    },
    {
      icono: 'icons/objectives-svg.svg',
      contenido: 'Promover la educación financiera de los estudiantes universitarios, a través de charlas, talleres y capacitaciones sobre temas como el ahorro, la inversión y el uso responsable del crédito.'
    },
    {
      icono: 'icons/objectives-svg.svg',
      contenido: 'Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.'
    },
    {
      icono: 'icons/objectives-svg.svg',
      contenido: 'Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">¿Cuáles son nuestros objetivos?</h1>
      
      <div className="space-y-8">
        {objetivos.map((objetivo, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Contenedor del icono */}
            <div className="w-16 flex-shrink-0">
              <img 
                src={`/src/assets/${objetivo.icono}`} 
                alt="Icono objetivo"
                className="w-12 h-12 object-contain"
              />
            </div>
            
            {/* Contenido del objetivo */}
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed text-justify">
                {objetivo.contenido}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objetivos;