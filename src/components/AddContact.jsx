import React, { useState } from 'react';
import Add from '../assets/icons/addcontact-svg.svg';

const AddContact = () => {

  return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-95 bg-white p-4 font-medium rounded-4xl text-center shadow-xl border border-[#085F63] flex flex-col items-center">
        {/* Imagen */}
        <div className="flex flex-col items-center mt-5">
        <img 
          src={Add} 
          alt="Añadir Contacto" 
          className="w-30 h-25"
          />    
        </div>
        <div className="w-full px-[0px] md:px-0 mb-0 mt-3">
          {/* Titulo */}
          <h1 className="text-teal-800 text-2xl overline overline-offset-15 font-bold mb-0 w-full text-center items-center">Alias de Contacto</h1>
        </div>
    
        {/* Sección Saldo */}
        {/* Barra de busqueda */}
        <div className="flex flex-col items-center justify-center w-full text-center mt-3 mb-9">
            <input
                  type="text"
                  id="contacts"
                  className="w-55 py-2 px-4 text-gray-500 leading-tight focus:outline-none rounded-2xl border border-[#085F63] text-xl text-left font-semilight bg-gray-200"
                  placeholder="   "
            />
        </div>
        <div className="flex flex-grid items-center mb-2 justify-center w-full md:max-w-[400px] gap-0">
          {/* Aceptar */}
          <div className="w-full">
            <button className="w-35 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight 
            py-2 px-6 rounded-xl transition-colors duration-200">
            Aceptar
            </button>
            </div>
            {/* Cancelar */}
          <div className="w-full">
            <button className="w-35 bg-white hover:bg-gray-200 text-sm text-teal-800 border border-teal-800 font-semilight 
            py-2 px-6 rounded-xl transition-colors duration-200">
            Cancelar
            </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddContact;