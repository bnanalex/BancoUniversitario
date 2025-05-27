import React from 'react';
import CajaSaldo from '../components/CajaSaldo';
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de navegación */}

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-5 py-12">
        <section className="mb-0">
          <CajaSaldo />
        </section>
      </main>
    </div>
  );
}
export default Dashboard;