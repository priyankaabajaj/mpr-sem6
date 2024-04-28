import { Link } from "react-router-dom";

function NavBar(){
  return(
    <nav className="nav-bar">
      <div className="nav-logo">
        <div className="logo-img"><img src="/images/logonew.png"></img></div>
        <div className="logo-text"><p><span>Ai</span>Tools</p></div>
      </div>
      <div className="nav-bar-buttons">
      <Link className="nav-buttons" id="nav-button-first" to="/"><p>Home</p></Link>
      <Link className="nav-buttons" id="nav-button-second" to="/services"><p>Services</p></Link>
      <Link className="nav-buttons" id="nav-button-third" to="/contactus"><p>Contact Us</p></Link>
      <Link className="nav-buttons" id="nav-button-fourth" to="/signup"><p>Login/Signup</p></Link>
      </div>
    </nav>
  )
}
export default NavBar
