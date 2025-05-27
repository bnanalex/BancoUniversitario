import React from 'react';

const profileData = {
  name: "Jorge Chiquin",
  accountNumber: "54321098765432109876",
  cedula: "12.345.678",
  birthDate: "Enero 01, 2001",
  email: "jorgechiquinv@gmail.com",
  phone: "04245995961",
  password: "***********************"
};

function ProfileOverlay() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-center text-teal-800 mb-6">
        Perfil
      </h2>

      <div className="space-y-4">
        {/* Nombre y Número de Cuenta */}
        <div className="flex flex-col border-b pb-4">
          <span className="text-xl font-bold text-gray-900">{profileData.name}</span>
          <span className="text-gray-600">{profileData.accountNumber}</span>
        </div>

        {/* Datos del perfil */}
        <ProfileField label="Cédula" value={profileData.cedula} />
        <ProfileField label="Fecha de nacimiento" value={profileData.birthDate} />
        <ProfileField label="Correo" value={profileData.email} />
        <ProfileField label="Teléfono" value={profileData.phone} />
        <ProfileField label="Contraseña" value={profileData.password} isPassword />

        {/* Botones de acción */}
        <div className="flex justify-between pt-4">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
            Editar Perfil
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para campos del perfil
function ProfileField({ label, value, isPassword = false }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className={`text-gray-900 ${isPassword ? 'tracking-wider' : ''}`}>
        {value}
      </span>
    </div>
  );
}

export default ProfileOverlay;