import React from "react"
{/*import RegistrationForm from "./pages/registrationForm"*/ }
import Home from "./pages/Home"
import RegistrationForm from "./pages/registrationForm"
import Services from "./pages/Services"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar" 
function App() {
  return (
    <>
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/banca-en-linea" element={<RegistrationForm />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
      </Router>

    </>
  )
}

export default App