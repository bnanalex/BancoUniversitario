import React, { useState } from 'react';

const ProfileOverlay = () => {
  // Datos iniciales del perfil
  const [profile, setProfile] = useState({
    name: "Jorge Chiquin",
    accountNumber: "54321098765432109876",
    cedula: "12.345.678",
    birthDate: "Enero 01, 2001",
    email: "jorgechiquinv@gmail.com",
    phone: "04245995961",
    password: "**********" // Mostrará siempre 10 asteriscos
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Guardar cambios
  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    // Guardamos la contraseña real pero mostramos asteriscos
    setProfile({ 
      ...profile, 
      password: "**********", // Siempre mostramos 10 asteriscos
      actualPassword: newPassword // Guardamos la contraseña real (opcional)
    });
    
    setIsEditing(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  // Cancelar edición
  const handleCancel = () => {
    setIsEditing(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-center text-teal-800 mb-6">
        Perfil
      </h2>

      <div className="space-y-4">
        {/* Nombre y Número de Cuenta */}
        <div className="flex flex-col border-b pb-4">
          <span className="text-xl font-bold text-gray-900">{profile.name}</span>
          <span className="text-gray-600">{profile.accountNumber}</span>
        </div>

        {/* Campos estáticos */}
        <ProfileField label="Cédula" value={profile.cedula} />
        <ProfileField label="Fecha de nacimiento" value={profile.birthDate} />
        <ProfileField label="Correo" value={profile.email} />
        <ProfileField label="Teléfono" value={profile.phone} />

        {/* Campos de contraseña */}
        {!isEditing ? (
          <ProfileField label="Contraseña" value="**********" isPassword />
        ) : (
          <>
            <div className="flex flex-col border-b pb-2">
              <label className="text-gray-600 font-medium">Nueva Contraseña</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border rounded px-2 py-1 mt-1"
                placeholder="Ingrese nueva contraseña"
                required
                minLength={8} // Longitud mínima recomendada
              />
            </div>
            <div className="flex flex-col border-b pb-2">
              <label className="text-gray-600 font-medium">Confirmar Contraseña</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded px-2 py-1 mt-1"
                placeholder="Confirme nueva contraseña"
                required
              />
            </div>
          </>
        )}

        {/* Botones */}
        <div className="flex justify-between pt-4">
          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              Editar Perfil
            </button>
          ) : (
            <>
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                Guardar
              </button>
              <button 
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </>
          )}
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar para campos no editables
const ProfileField = ({ label, value, isPassword = false }) => {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className={`text-gray-900 ${isPassword ? 'tracking-wider' : ''}`}>
        {value}
      </span>
    </div>
  );
};

export default ProfileOverlay;