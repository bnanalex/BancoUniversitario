import React, { useState } from 'react';
import Contact from '../assets/icons/contacts-svg.svg';

const ContactsMenu = () => {

 return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-95 bg-white p-0 rounded-4xl font-medium text-center border border-[#085F63] flex flex-col items-center">
        {/* Sección Cuenta */}
        <div className="flex flex-col items-center mt-5">
            <img 
            src={Contact} 
            alt="Contacto" 
            className="w-30 h-30"
        />    
        </div>
        <div className="w-60 flex flex-col px-[0px]">
        <div className="w-full px-[0px] md:px-0 mb-0">
          <h1 className="text-teal-800 text-2xl overline overline-offset-15 font-bold mb-0 w-full text-center items-center">Nombre de Contacto</h1>
        </div>
        <div className="w-full px-[0px] md:px-0 mb-4">
          <p className="text-gray-500 text-md font-light underline underline-offset-15 tracking-wide text-center">54321098765432109876</p>
        </div>
        <div className="w-full px-[0px] md:px-0">
          <h2 className="text-teal-800 text-md font-semibold tracking-wide text-center">Descripción</h2>
        </div>
        <div className="w-full px-[0px] md:px-0">
          <p className="text-gray-500 text-sm font-semibold tracking-wide text-center">Descripción del contacto</p>
        </div>
        </div>
        <div className="w-full my-5 flex flex-col items-center">
        <button className="w-35 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight py-2 px-6 rounded-xl border border-white transition-colors duration-200">
        Volver
        </button> 
        </div>       
      </div>
    </div>
  );
};

export default ContactsMenu;