import React from 'react';
import transferIcon from '../assets/icons/service-1-vr-svg.svg';
import depositIcon from '../assets/icons/service-2-vr-svg.svg';
import withdrawIcon from '../assets/icons/service-3-vr-svg.svg';
import scholarshipIcon from '../assets/icons/service-4-vr-svg.svg';
import paymentIcon from '../assets/icons/service-5-vr-svg.svg';

const services = [
  {
    icon: transferIcon,
    title: 'Transferencias entre estudiantes sin comisión',
    description:
      'El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.',
  },
  {
    icon: depositIcon,
    title: 'Depósitos en efectivo',
    description:
      'El Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.',
  },
  {
    icon: withdrawIcon,
    title: 'Retiros en efectivo',
    description:
      'El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.',
  },
  {
    icon: scholarshipIcon,
    title: 'Cobro de becas estudiantiles',
    description:
      'El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.',
  },
  {
    icon: paymentIcon,
    title: 'Pago de matrícula estudiantil',
    description:
      'El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.',
  },
];

function OurServices() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-teal-800 mb-12">
          Nuestros Servicios
        </h2>

        <div className="space-y-12 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Tarjeta con icono a la izquierda y título centrado */}
              <div
                className="w-[500px] flex items-center border rounded-md px-4 py-3 bg-white shadow-sm"
                style={{ borderColor: '#085F63' }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-10 w-10 mr-3"
                />
                <h3 className="text-[#085F63] font-semibold text-2xl text-center w-full">
                  {service.title}
                </h3>
              </div>

              {/* Descripción debajo, centrada horizontalmente y justificada */}
              <p className="mt-4 text-lg text-gray-800 text-justify max-w-[500px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
