import MenuIcon from '../assets/icons/menu-vr-svg.svg';
import Logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import Menu from './Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full flex items-center px-2 sm:px-6 py-2 sm:py-4 bg-white shadow-md z-50">
        {/* Sección izquierda */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={MenuIcon}
            alt="Menú"
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(true)}
          />
          <img
            src={Logo}
            alt="Logo Banco Universitario"
            className="h-5 w-auto sm:h-7 md:h-8"
          />
        </div>

        {/* Sección derecha: Botones */}
        <div className="flex items-center gap-1 sm:gap-4 ml-auto">
          <Link to={"/banca-en-linea"}>
            <button className="px-2 py-1 sm:px-4 sm:py-2 rounded-sm border border-[#085F63] text-[#085F63] 
            hover:bg-[#adced179] transition-colors text-[10px] sm:text-sm md:text-base">
              Iniciar Sesión
            </button>
          </Link>

          <Link to={"/banca-en-linea"}>
            <button className="px-2 py-1 sm:px-4 sm:py-2 rounded-sm bg-[#49BEB7] text-white 
            hover:bg-[#2f9992] transition-colors text-[10px] sm:text-sm md:text-base">
              Registrar
            </button>
          </Link>
        </div>
      </header>

      {/* Menú lateral condicional */}
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
