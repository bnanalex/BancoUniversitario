import React from "react";
import { useNavigate } from "react-router-dom";

const BancaLinea = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white border-4 border-teal-800 rounded-xl p-6 w-[300px] text-center shadow-xl">
        <div className="text-teal-800 text-4xl font-bold">!</div>
        <hr className="my-2 border-t-2 border-teal-800" />
        <p className="text-gray-600 text-sm mb-4">
          Para poder ingresar a la banca en línea es necesario logearse
        </p>
        <div className="flex justify-center space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
          <button
  onClick={() => {
    alert("Botón presionado");
    navigate("/login");
  }}
  className="bg-teal-800 text-white font-semibold px-4 py-2 rounded-md"
>
  Ir a Login
</button>
        </div>
      </div>
    </div>
  );
};

export default BancaLinea;
