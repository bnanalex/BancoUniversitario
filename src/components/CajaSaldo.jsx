import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const CajaSaldo = () => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-150 bg-white p-4 rounded-4xl font-medium text-center shadow-xl border border-[#085F63] flex flex-col items-center">
        {/* Sección Cuenta */}
        <div className="w-full px-[0px] md:px-0 mb-2">
          {/* Titulo "Banca en Linea" */}
          <h1 className="text-teal-800 text-4xl underline underline-offset-15 font-bold mb-4 w-full text-center items-center">Banca en Linea</h1>
        </div>
        <div className="w-full px-[0px] md:px-0 mb-2">
          {/* Tipo de Cuenta */}
          <h2 className="text-teal-800 text-lg font-semilight text-center">Cuenta Corriente</h2>
        </div>
        <div className="w-full px-[0px] md:px-0">
          {/* ID de Cuenta */}
          <p className="text-gray-500 text-md font-light tracking-wide text-center">54321098765432109876</p>
        </div>
        
        {/* Sección Saldo */}
        <div className="flex flex-col items-center w-full md:max-w-[400px] text-center mt-2">
          <div className="items-center justify-center w-full px-[0px] md:px-0">
            <div className="w-full px-[0px] flex items-center justify-center gap-2">
              <h1 className="text-teal-800 text-3xl font-semilight">Bs</h1>
              <div className="flex items-center">
                <input
                  type={showBalance ? "text" : "password"}
                  id="saldoCuenta"
                  className="w-48 py-5 px-4 text-teal-800 leading-tight focus:outline-none text-3xl text-center underline underline-offset-4 font-semilight bg-transparent"
                  value={showBalance ? "3.500,00" : "••••••••"}
                  readOnly
                />
                <button
                  onClick={toggleBalance}
                  className="pr-2 text-teal-800 hover:text-teal-600"
                >
                  {showBalance ? (
                    <EyeSlashIcon className="h-8 w-8" />
                  ) : (
                    <EyeIcon className="h-8 w-8" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-[0px] md:px-0 mt-2">
            {/* Texto "Disponible" */}
            <h2 className="text-gray-500 text-2xl font-semilight text-center">Disponible</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CajaSaldo;