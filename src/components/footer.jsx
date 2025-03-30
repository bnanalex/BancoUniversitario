import React from 'react';
import logo from '../assets/images/home/logo-banco-universitario-no-background.png';
import facebookIcon from '../assets/icons/facebook-brands.svg';
import instagramIcon from '../assets/icons/instagram-brands.svg';

function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <img
            src={logo}
            alt="Logo Banco Universitario"
            className="h-12 mx-auto md:mx-0"
          />
          <p className="mt-2">Banco Universal © 2025</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm md:text-base">Dirección: Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.</p>
          <p className="text-sm md:text-base">Teléfono: +58 212-555-5555</p>
          <p className="text-sm md:text-base">Fax: +58 212-555-5556</p>
          <p className="text-sm md:text-base">Correo electrónico: info@bancouniversitario.com.ve</p>
        </div>
        <div className="text-center md:text-left">
          <p className="mb-2">Redes sociales:</p>
          <a href="https://www.facebook.com/bancouniversitariove" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start mb-2 md:mb-2">
            <img src={facebookIcon} alt="Facebook" className="h-5 mr-1" />
            @bancouniversitariove
          </a>
          <a href="https://www.instagram.com/bancouniversitariove" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start">
            <img src={instagramIcon} alt="Instagram" className="h-5 mr-1" />
            @bancouniversitariove
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;