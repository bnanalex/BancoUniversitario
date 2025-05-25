import React, { useState } from 'react';
import Logo from '../assets/images/home/logo-banco-universitario-no-background.png';

const ContactsMenu = () => {

 return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-130 bg-white p-0 rounded-4xl font-medium text-center border border-[#085F63] flex flex-col items-center">
        {/* Sección Cuenta */}
        <div className="flex flex-col items-center my-10">
            <img 
            src={Logo} 
            alt="Logotipo" 
            className="w-85 h-12"
        />    
        </div>
        <div className="w-full px-[0px] md:px-0 mb-2">
          <h1 className="text-teal-800 text-4xl underline underline-offset-15 font-semibold mb-4 w-full text-center items-center">Lista de Contactos</h1>
        </div>
        {/* Barra de busqueda */}
        <div className="flex flex-col items-center justify-center w-full text-center mt-2 mb-5">
            <input
                  type="text"
                  id="contacts"
                  className="w-70 py-2 px-4 text-gray-500 leading-tight focus:outline-none rounded-2xl border border-[#085F63] text-xl text-left font-semilight bg-gray-200"
                  placeholder="Buscar"
            />
        </div>
      <div className="w-85 h-100 bg-white p-0 font-medium text-center border border-[#085F63] flex flex-col items-center">
        {/* Contactos */}
        <button className = "w-80 h-12  my-2 bg-gray-200 text-teal-800 p-0 rounded-4xl font-medium text-base md:text-lg border border-gray-200 hover:border-teal-800 flex items-center gap-4 text-left hover:bg-gray-200 hover:-translate-y-0 transition duration-200">
            Mary Sofia
        </button>
        <button className = "w-80 h-12  my-2 bg-gray-200 text-teal-800 p-0 rounded-4xl font-medium text-base md:text-lg border border-gray-200 hover:border-teal-800 flex items-center gap-4 text-left hover:bg-gray-200 hover:-translate-y-0 transition duration-200">
            Alexis UCLA
        </button>
        <button className = "w-80 h-12  my-2 bg-gray-200 text-teal-800 p-0 rounded-4xl font-medium text-base md:text-lg border border-gray-200 hover:border-teal-800 flex items-center gap-4 text-left hover:bg-gray-200 hover:-translate-y-0 transition duration-200">
            Luis
        </button>
        <button className = "w-80 h-12  my-2 bg-gray-200 text-teal-800 p-0 rounded-4xl font-medium text-base md:text-lg border border-gray-200 hover:border-teal-800 flex items-center gap-4 text-left hover:bg-gray-200 hover:-translate-y-0 transition duration-200">
            Chela Cafetín
        </button>
        </div>
            <div className="bg-teal-400 rounded-b-4xl py-[25px] px-[59px] font-medium flex flex-row items-center justify-center gap-6">
            {/* botones */}
            <div className="flex flex-grid items-center justify-center w-full md:max-w-[400px] gap-6">
                {/* Ver contacto */}
                <div className="w-full">
                    <button className="w-35 bg-teal-700 hover:bg-teal-600 text-sm text-white font-semilight 
                    py-2 px-6 rounded-xl border border-white transition-colors duration-200">
                        Ver Contacto
                    </button>
                </div>
                {/* Eliminar */}
                <div className="w-full">
                    <button className="w-35 bg-teal-700 hover:bg-teal-600 text-sm text-white font-semilight 
                    py-2 px-6 rounded-xl border border-white transition-colors duration-200">
                        Eliminar
                    </button>
                </div>
                {/* Volver */}
                <div className="w-full">
                    <button className="w-35 bg-gray-200 hover:bg-teal-200 text-sm text-teal-700 hover:text-teal-900 font-semilight 
                    py-2 px-6 rounded-xl border border-[#085F63] transition-colors duration-200">
                        Volver
                    </button>
                </div>
            </div>
        </div>        
      </div>
    </div>
  );
};

export default ContactsMenu;