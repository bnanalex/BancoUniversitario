import React, { useState } from 'react';
import Task from '../assets/icons/task_alt_24dp_085F63_FILL0_wght400_GRAD0_opsz24.svg';

const Comprobante = () => {

  return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-115 bg-white p-4 font-medium text-center shadow-xl border border-[#085F63] flex flex-col items-center">
        {/* Sección Cuenta */}
        <div className="w-full px-[0px] md:px-0 mb-2">
          {/* Titulo "Banca en Linea" */}
          <h1 className="text-teal-800 text-4xl underline underline-offset-15 font-bold mb-4 w-full text-center items-center">Comprobante</h1>
        </div>
        {/* Imagen */}
        <div className="flex flex-col items-center mt-5">
        <img 
          src={Task} 
          alt="Comprobante" 
          className="w-30 h-25"
          />    
        </div>
        <div className="w-full px-[0px] md:px-0 mb-2">
          {/* Tipo de Cuenta */}
          <h2 className="text-teal-800 text-xl font-semilight text-center">Cantidad</h2>
        </div>
        
        {/* Sección Saldo */}
        <div className="flex flex-col items-center w-85 md:max-w-[400px] mt-2">
          <div className="items-center justify-center w-full px-[0px] md:px-0">
            <div className="w-85 px-[0px] bg-gray-200 flex flex-row rounded-2xl items-center border border-[#085F63] justify-center gap-2">
              <h1 className="text-teal-800 text-3xl font-semilight">Bs</h1>
              <div className="flex items-center">
                <div className="w-35 py-2 px-4 text-teal-800 leading-tight focus:outline-none text-3xl text-center font-semilight bg-transparent">
                  <h1 className="text-gray-500 text-3xl font-semilight">250,00</h1>
                  </div>
              </div>
            </div>
          </div>
          <div className="w-full px-[0px] md:px-0 mt-2">
            {/* Tipo de Movimiento "Cobrado o Pagado" */}
            <h2 className="text-teal-800 text-sm font-semibold text-center mb-2">Cobrado</h2>
          </div>
        </div>
        {/* Datos del comprobante */}
        <div className="w-85 px-[0px] md:px-0 mb-2">
          <div className="w-60 flex flex-col px-[0px]">
            <div className="w-full px-[0px] md:px-0 mb-0">
              <h1 className="text-teal-800 text-lg  font-bold mb-0 w-full text-left items-center">Fecha:</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-4">
              <h1 className="text-gray-500 text-lg  font-bold mb-0 w-full text-left items-center">2025-02-27</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-0">
              <h1 className="text-teal-800 text-lg  font-bold mb-0 w-full text-left items-center">Numero de Referencia:</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-4">
              <h1 className="text-gray-500 text-lg  font-bold mb-0 w-full text-left items-center">1004</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-0">
              <h1 className="text-teal-800 text-lg  font-bold mb-0 w-full text-left items-center">Número de Cuenta:</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-4">
              <h1 className="text-gray-500 text-lg  font-bold mb-0 w-full text-left items-center">73050680834503834</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-0">
              <h1 className="text-teal-800 text-lg  font-bold mb-0 w-full text-left items-center">Número de Cédula:</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-4">
              <h1 className="text-gray-500 text-lg  font-bold mb-0 w-full text-left items-center">12.345.678</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-0">
              <h1 className="text-teal-800 text-lg  font-bold mb-0 w-full text-left items-center">Descripción:</h1>
            </div>
            <div className="w-full px-[0px] md:px-0 mb-4">
              <h1 className="text-gray-500 text-lg  font-bold mb-8 w-full text-left items-center">Helados Lab II</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-grid items-center mb-2 justify-center w-full md:max-w-[400px] gap-6">
          {/* Aceptar */}
          <div className="w-full">
            <button className="w-35 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight 
            py-2 px-6 rounded-xl transition-colors duration-200">
            Aceptar
            </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Comprobante;