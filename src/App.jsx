import React from "react"
<<<<<<< HEAD
import Home from "./pages/Home"
import RegistrationForm from "./pages/registrationForm"
import Services from "./pages/Services"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import Footer from "./components/footer"
=======
{/*import RegistrationForm from "./pages/registrationForm"*/}
import Home  from "./pages/Home"
import Services from "./pages/Services"
>>>>>>> 674f30eb948b86bd20a6f13ad3783403dcda4072
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
          <Footer/>
        </main>
      </Router>

    </>
  )
}

export default App;
