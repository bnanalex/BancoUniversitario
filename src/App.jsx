import React, { useState, useEffect } from 'react';
import Home from "./pages/Home"
import RegistrationForm from "./pages/registrationForm"
import Services from "./pages/Services"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import NavbarBanca from "./components/NavBar-Banca"
import Footer from "./components/footer"
import Contacts from "./pages/Contacts"
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Comprueba si hay un token al montar el componente o cuando cambia algo relevante
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // !! convierte un valor truthy/falsy en un booleano
    }, []);
  return (
    <>
      <Router>
        <main>

          {isLoggedIn ? (
            <NavbarBanca />
          ) : (
            <Navbar />
          )}

          {/* Rutas de la aplicación */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/banca-en-linea" element={<RegistrationForm />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer/>
        </main>
      </Router>

    </>
  )
}

export default App;
