import React from 'react';
import logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import facebookIcon from '../assets/icons/facebook-brands.svg';
import instagramIcon from '../assets/icons/instagram-brands.svg';
// import twitterIcon from '../assets/icons/twitter-brands.svg';

function Menu() {
  return (
    <div className="bg-teal-800 text-white p-4">
      <h1 className="text-4xl font-semibold text-center mb-6">Menu</h1>
      <div className="space-y-4">
        <button className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          Inicio
        </button>
        <button className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          Inicio De Sesión
        </button>
        <button className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          Banca En Linea
        </button>
        <button className="bg-white text-teal-800 w-full py-2 rounded-md font-semibold hover:bg-gray-200 active:bg-gray-300 transition duration-200">
          Servicios
        </button>
      </div>
      <div className="mt-8">
        <p className="text-center mb-4">Redes Sociales:</p>
        <div className="flex flex-col items-center space-y-2">
          <a href="https://www.facebook.com/bancouniversitariove" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={facebookIcon} alt="Facebook" className="h-6 mr-2" />
            @bancouniversitariove
          </a>
          <a href="https://www.instagram.com/bancouniversitariove" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={instagramIcon} alt="Instagram" className="h-6 mr-2" />
            @bancouniversitariove
          </a>
          {/* <a href="https://twitter.com/bancouniversitariove" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={twitterIcon} alt="Twitter" className="h-6 mr-2" />
            @bancouniversitariove
          </a> */}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <img src={logo} alt="Logo Banco Universitario" className="h-12" />
      </div>
    </div>
  );
}

export default Menu;