import React, { useState } from 'react';
// Assuming contactIcon is not used in the final design as per new instructions.
// import contactIcon from '../assets/icons/vision-svg.svg'; 

const FrequentContactForm = () => {
  const [formData, setFormData] = useState({
    accountNumber: '34567890123456789012',
    cedula: '12.345.678',
    amount: '322.062,00',
    description: 'Pago del Cafetín UCLA',
    password: '*********',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Datos enviados:', formData);
  };

  const handleCancel = () => {
    // Lógica para cancelar
    console.log('Operación cancelada');
  };

  const handleConsult = () => {
    // Lógica para consultar (no modifica los datos introducidos)
    console.log('Consultando para autollenado de datos...');
  };

  return (
    // Applied border-2 (for 2px thickness) and a custom border color using arbitrary value syntax
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border-2 border-[#085F63]"> 
      {/* Encabezado con título centrado y descripción/botón a los lados */}
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl font-bold text-center mb-6" style={{ color: '#085F63' }}>Transferencia</h1>
        <div className="flex justify-between items-center w-full">
          <p className="text-xl font-semibold text-gray-600">Para pagos frecuentes</p>
          <button
            type="button"
            onClick={handleConsult}
            className="px-4 py-2 bg-teal-600 text-white text-base font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Consultar
          </button>
        </div>
        {/* Line added just after "Para pagos frecuentes" and "Consultar" button */}
        <div className="border-t-2 border-gray-200 mt-4 w-full"></div>
      </div>

      <p className="text-lg text-gray-600 mb-8">Introduzca los datos para realizar la transacción.</p>

      <form onSubmit={handleSubmit}>
        {/* Campo Número de Cuenta */}
        <div className="mb-6">
          <label className="block text-xl font-bold mb-3" style={{ color: '#085F63' }}>Número de Cuenta</label>
          <input
            type="text"
            value={formData.accountNumber}
            onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Existing horizontal line after "Número de Cuenta" */}
        <div className="border-t-2 border-gray-200 my-6"></div>

        {/* Campos Cedula */}
        <div className="mb-6">
          <label className="block text-xl font-bold mb-3" style={{ color: '#085F63' }}>Número de Cédula</label>
          <input
            type="text"
            value={formData.cedula}
            onChange={(e) => setFormData({...formData, cedula: e.target.value})}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg"
          />
        </div>

        {/* Campos Cantidad */}
        <div className="mb-6">
          <label className="block text-xl font-bold mb-3" style={{ color: '#085F63' }}>Cantidad</label>
          <div className="flex items-center">
            <span className="text-xl font-medium mr-2">Bs</span>
            <input
              type="text"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              className="flex-1 px-4 py-3 text-lg border-2 border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Existing horizontal line */}
        <div className="border-t-2 border-gray-200 my-6"></div>

        {/* Descripción */}
        <div className="mb-6">
          <label className="block text-xl font-bold mb-3" style={{ color: '#085F63' }}>Descripción</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg"
          />
        </div>

        <div className="border-t-2 border-gray-200 my-6"></div>

        {/* Contraseña */}
        <div className="mb-8">
          <label className="block text-xl font-bold mb-3" style={{ color: '#085F63' }}>Contraseña</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg tracking-widest"
          />
        </div>

        {/* Botones - Colores teal */}
        <div className="flex justify-center space-x-8">
          <button
            type="submit"
            className="px-8 py-3 bg-teal-600 text-white text-xl font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-8 py-3 bg-gray-200 text-gray-800 text-xl font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FrequentContactForm;