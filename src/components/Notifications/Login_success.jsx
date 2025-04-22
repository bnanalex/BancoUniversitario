import React from "react";
import successImage from "../../assets/icons/task_alt_24dp_085F63_FILL0_wght400_GRAD0_opsz24.svg"; // Ajusta la ruta si es necesario
import { CheckCircle } from "../../assets/icons/task_alt_24dp_085F63_FILL0_wght400_GRAD0_opsz24.svg"; // O usa cualquier ícono SVG

const SuccessOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center relative">
        <CheckCircle className="text-green-500 w-14 h-14 mx-auto mb-4" />
        
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ¡Usuario logueado con éxito!
        </h2>

        <img
          src={successImage}
          alt="Success"
          className="mx-auto my-4 w-24 h-24 object-contain"
        />

        <button
          onClick={onClose}
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
        >
          Ir a Banca en Línea
        </button>
      </div>
    </div>
  );
};

export default SuccessOverlay;
