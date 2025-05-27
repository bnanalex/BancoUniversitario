import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import Check from "../assets/icons/check-svg.svg";

// const contacts = [
//   { icon: Check, text: "Mary Sofia" },
//   { icon: Check, text: "Alexis UCLA" },
//   { icon: Check, text: "Luis" },
//   { icon: Check, text: "Chela Cafetín" },
//   { icon: Check, text: "Prof. Jorge Chiquín" }
// ];

const ContactsMenu = ({contacts}) => {
  const [selectedContact, setSelectedContact] = useState(null);

  // Manejar clics fuera de los contactos
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.contact-button')) {
        setSelectedContact(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleContactClick = (index, e) => {
    e.stopPropagation();
    setSelectedContact(selectedContact === index ? null : index);
  };

  return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-130 bg-white p-0 rounded-4xl font-medium text-center border border-[#085F63] flex flex-col items-center">
        {/* Imagen */}
        <div className="flex flex-col items-center my-10">
            <img 
            src={Logo} 
            alt="Logotipo" 
            className="w-85 h-12"
        />    
        </div>
        <div className="w-full px-[0px] md:px-0 mb-2">
          <h1 className="text-teal-800 text-4xl underline underline-offset-15 font-bold mb-4 w-full text-center items-center">Lista de Contactos</h1>
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
        <div className="w-85 h-100 bg-white p-0 font-medium text-center border border-[#085F63] flex flex-col items-center m-0">
          <div className="mt-4 grid gap-5">
            
            {contacts?.length > 0 ? contacts.map((check, index) => (
              <button
                key={index}
                onClick={(e) => handleContactClick(index, e)}
                className={`group w-80 h-12 p-4 rounded-4xl font-medium text-base md:text-lg shadow-none hover:shadow-md border flex items-center justify-between gap-4 text-left transition duration-200 contact-button
                  ${
                    selectedContact === index
                      ? 'bg-teal-100 border-teal-800 hover:bg-teal-100'
                      : 'bg-gray-200 border-gray-200 hover:bg-gray-200 hover:border-teal-800'
                  }`}
              >
                <span className="flex-1 text-teal-800">{check.text}</span>
                <img 
                  src={check.icon} 
                  alt={`Icono ${index}`} 
                  className={`w-10 h-10 shrink-0 order-last transition-opacity duration-200
                    ${
                      selectedContact === index 
                        ? 'opacity-100' 
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                />
              </button>
            ))
            : (
              <p className="text-gray-500 text-lg">No hay contactos disponibles</p>
            )}
          </div>
        </div>
        <div className="bg-teal-400 rounded-b-4xl py-[25px] px-[59px] font-medium flex flex-row items-center justify-center gap-6">
            {/* botones */}
            <div className="flex flex-grid items-center justify-center w-full md:max-w-[400px] gap-6">
                {/* Ver contacto */}
                <div className="w-full">
                    <button className="w-35 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight 
                    py-2 px-6 rounded-xl transition-colors duration-200">
                        Ver Contacto
                    </button>
                </div>
                {/* Eliminar */}
                <div className="w-full">
                    <button className="w-35 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight 
                    py-2 px-6 rounded-xl transition-colors duration-200">
                        Eliminar
                    </button>
                </div>
                {/* Volver */}
                <div className="w-full">
                    <button className="w-35 bg-white hover:bg-gray-300 text-sm text-teal-800 hover:text-teal-900 font-semilight 
                    py-2 px-6 rounded-xl border border-teal-800 transition-colors duration-200">
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