import React from 'react';
import image from '../assets/images/home/who-we-are.jpg';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <div className="p-2 bg-teal-800 w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-white mb-8 mt-5">
          ¿Quiénes somos?
        </h1>
      </div>
      <div className="bg-white overflow-hidden mx-2 md:mx-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={image}
              alt="About Us"
              className="w-full md:h-[71vh] object-cover"
            />
          </div>
          <div className="md:w-2/3 text-justify p-4 md:p-8">
            <p className="mb-4 text-base md:text-lg">
              En el Banco Universidad, somos un equipo comprometido a ofrecer
              servicios financieros eficientes y de calidad, tanto a través de
              canales digitales como presenciales.
            </p>
            <p className="mb-4 text-base md:text-lg">
              Promovemos transferencias sin comisión, depósitos y retiros
              seguros, y brindamos educación financiera mediante charlas y
              talleres.
            </p>
            <p className="mb-4 text-base md:text-lg">
              Además, contamos con alianzas estratégicas para ofrecer
              beneficios exclusivos como descuentos y becas. Nos
              caracterizamos por nuestra cultura de innovación y mejora
              continua para satisfacer las necesidades de nuestros clientes.
            </p>
            <section className="text-center p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">¡Únete al Banco Universitario y disfruta de una experiencia bancaria segura!</h2>
              <Link to={"/banca-en-linea"}>
              <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 px-4 rounded">
              Registrarse
              </button>
              </Link>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;