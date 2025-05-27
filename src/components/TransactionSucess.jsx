import React, { useState } from 'react';
import Check from '../assets/icons/task_alt_24dp_085F63_FILL0_wght400_GRAD0_opsz24.svg';

const TransactionSucess = () => {

 return (
    <div className="bg-transparent py-16 px-4 flex flex-col items-center">
      {/* Sección principal */}
      <div className="w-95 bg-white p-0 rounded-4xl font-medium text-center border border-[#085F63] flex flex-col items-center">
        {/* Imagen */}
        <div className="flex flex-col items-center mt-5">
            <img 
            src={Check} 
            alt="Trasaccion Realizada Exitosamente" 
            className="w-30 h-25"
        />    
        </div>
        <div className="w-60 flex flex-col px-[0px]">
            {/* Texto */}
        <div className="w-full px-[0px] md:px-0 mb-0">
          <h1 className="text-gray-500 mb-0 text-lg font-semibold overline overline-offset-20 mb-0 w-full text-center items-center">Transacción realizada</h1>
        </div>
        <div className="w-full px-[0px] md:px-0 mb-0">
          <h1 className="text-gray-500 mb-0 text-lg font-semibold mb-0 w-full text-center items-center">con éxito</h1>
        </div>
        </div>
            <div className="bg-transparent rounded-b-4xl py-[25px] px-[59px] font-medium flex flex-row items-center justify-center gap-6">
            {/* botones */}
            <div className="flex flex-grid items-center justify-center w-full md:max-w-[400px] gap-6">
                {/* Aceptar */}
                <div className="w-full">
                    <button className="w-43 bg-teal-800 hover:bg-teal-600 text-sm text-white font-semilight 
                    py-2 px-6 rounded-xl transition-colors duration-200">
                        Ir al Comprobante
                    </button>
                </div>
            </div>
        </div>       
      </div>
    </div>
  );
};

export default TransactionSucess;