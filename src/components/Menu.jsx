
import React, { useRef } from 'react';
import logo from '../assets/images/home/Logo letras blancas.png';
import facebookIcon from '../assets/icons/facebook-brands.svg';
import instagramIcon from '../assets/icons/instagram-brands.svg';
import twitterIcon from '../assets/icons/square-x-twitter-brands.svg';
import { Link } from 'react-router-dom';

function Menu({ onClose }) {
  const menuRef = useRef(null);
  return (
    <div
      ref={menuRef}
      className="fixed left-0 top-16 w-72 h-[calc(100%-4rem)] bg-teal-800 text-white p-4 z-50 shadow-lg"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <button
          onClick={onClose}
          className="text-white text-xl font-bold"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
      </div>

        <div className="space-y-4">
          <Link to="/" onClick={onClose} className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 block text-center">
            Inicio
          </Link>
          <Link to="/banca-en-linea" onClick={onClose} className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 block text-center">
            Banca En Linea
          </Link>
          <Link to="/servicios" onClick={onClose} className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 block text-center">
            Servicios
          </Link>
          <Link to="/servicios" onClick={onClose} className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 block text-center">
            Servicios
          </Link>
          <>  </>
        </div>
      <div className="mt-8 text-sm border-t border-white/20 pt-4">
        <p className="text-xl font-semibold text-center mb-4">Redes Sociales:</p>
        <div className="flex flex-col items-start space-y-2">
          <a href="https://www.facebook.com/bancouniversitariove" className="flex items-center">
            <img src={facebookIcon} alt="Facebook" className="h-6 mr-2" />
            @bancouniversitariove
          </a>
          <a href="https://www.instagram.com/bancouniversitariove" className="flex items-center">
            <img src={instagramIcon} alt="Instagram" className="h-6 mr-2" />
            @bancouniversitariove
          </a>
          <a href="https://x.com/bancouniversitariove" className="flex items-center">
            <img src={twitterIcon} alt="Twitter" className="h-6 mr-2" />
            @bancouniversitariove
          </a>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <img src={logo} alt="Logo Banco Universitario" className="h-12" />
      </div>
    </div>
  );
}

export default Menu;