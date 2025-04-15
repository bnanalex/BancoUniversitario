import Footer from "./components/footer"
import AboutUs from "./pages/aboutUs"
import Menu from "./components/Menu"
import OurServices from "./pages/OurServices"
import RegistrationForm from "./pages/registrationForm"
import Navbar from "./components/NavBar"
import Ob from "./components/Objetives"
function App() {
  return (
    <>
      {/* <Menu /> */}
      {/* <AboutUs /> */}
      {/* <OurServices /> */}

      <Navbar />
      <Ob />
      <RegistrationForm />
      <Footer />
    </>
  )
}

export default App