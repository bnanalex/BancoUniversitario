import React from 'react';
import notificationIcon from '../assets/icons/notification-icon.svg'; // Ajusta la ruta a tu icono

const NotificationOverlay = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full overflow-hidden">
        {/* Header con icono */}
        <div className="bg-blue-50 p-4 flex items-center">
          <img 
            src={notificationIcon} 
            alt="Notificación" 
            className="h-10 w-10 mr-3"
          />
          <h3 className="text-xl font-semibold text-gray-800">{title || 'Notificación'}</h3>
        </div>

        {/* Cuerpo del mensaje */}
        <div className="p-6">
          <p className="text-gray-600">{message || 'Los datos proporcionados ya han sido utilizados.'}</p>
        </div>

        {/* Footer con botón */}
        <div className="bg-gray-50 px-4 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Revisar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationOverlay;