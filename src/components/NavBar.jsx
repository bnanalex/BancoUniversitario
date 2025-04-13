import { Link } from 'react-router-dom';
import MenuIcon from '../assets/icons/menu-vr-svg.svg';
import Logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed w-full flex justify-between items-center px-[2rem] py-4 bg-white shadow-md z-50">
      {/* Sección izquierda */}
      <div className="flex items-center gap-6">
        <img 
          src={MenuIcon} 
          alt="Menú" 
          className="w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img 
          src={Logo} 
          alt="Logo Banco Universitario" 
          className="h-6 w-auto md:h-8"
        />
      </div>

      {/* Sección derecha */}
      <div className="flex items-center gap-6 mr-[25px]">
        <button className="px-6 py-2 rounded-sm border border-[#085F63] text-[#085F63] 
          hover:bg-[#adced179] transition-colors text-sm md:text-base">
          Iniciar Sesión
        </button>
        
        <button className="px-6 py-2 rounded-sm bg-[#49BEB7] text-white 
          hover:bg-[#2f9992] transition-colors text-sm md:text-base">
          Registrar
        </button>
      </div>
    </header>
  );
};

export default Navbar;