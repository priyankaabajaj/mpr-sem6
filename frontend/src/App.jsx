import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/homePage"
import Services from "../templates/Services"
import ContactUs from "./pages/ContactUs"
import Signup from "./pages/signup"
import Login from "./pages/login"

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
  )
}

export default App
