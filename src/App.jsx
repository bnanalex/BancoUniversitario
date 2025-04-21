import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Form from "./pages/registrationForm";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/services" element={<Home />} />

        {/* Página de Login/Registro */}
        <Route path="/login" element={<Form />} />

        {/* Página de Servicio */}
        <Route path="/" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
