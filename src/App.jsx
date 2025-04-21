import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Form from "./pages/registrationForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página de Login/Registro */}
        <Route path="/login" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
